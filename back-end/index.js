import express from "express";
import cors from "cors";
import mysql from "mysql";

const app = express();
app.use(cors());
app.use(express.json())

const dbConfig = {
    host:"localhost",
    user:"root",
    password:"root",
    database:"postmanager"
}
const db = mysql.createConnection(dbConfig);

app.get("/posts",(req,res)=>{
    const q = "SELECT * FROM `posts`"
    db.query(q,(err,data)=>{
        if(err) { console.log(err); return res.json(err); }
        return res.json(data);
    })
})

app.post("/posts",(req,res)=>{
    const q = "INSERT INTO `posts`(`title`,`desc`) VALUES (?)";
    const values = [
        req.body.title,
        req.body.desc
    ]
    db.query(q,[values],(err,data)=>{
        if(err) { return res.send(err); }
        return res.json(data);
    })
})

app.delete("/posts/:id",(req,res)=>{
    const q = "DELETE FROM `posts` WHERE `id` = ?";
    db.query(q, [req.params.id],(err,data)=>{
        if(err) { return res.send(err); }
        return res.json(data);
    })
})

app.put("/posts/:id",(req,res)=>{
    const q = "UPDATE `posts` SET `title` = ?,`desc` = ? WHERE `id` = ?";
    const values = [
        req.body.title,
        req.body.desc,
        req.params.id
    ]
    db.query(q,[...values],(err,data)=>{
        if(err) { return res.send(err); }
        return res.json(data);
    })
})

app.listen(8080,()=>{console.log("Webserver at port 8080")});