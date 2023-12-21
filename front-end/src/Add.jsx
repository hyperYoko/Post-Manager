import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Add() 
{
    const [post,setPost] = useState({
        title:"",
        desc:""
    })
    function handleChange(e) {
        setPost((prevState) => ({...prevState, [e.target.name]: e.target.value}));
    }

    const navigate = useNavigate();
    function handleClick(e) {
        e.preventDefault();
        fetch("http://localhost:8080/posts", {
			method: "POST", 
            mode: "cors",
			body: JSON.stringify(post), 
			headers: { "Content-Type": "application/json" } 
		})
			.then(res=> navigate("/"))
			.catch(err => console.log(err))
    }
    
    return (
        <div className="form">
            <h1>Add Post</h1>
            <input
                type="text"
                placeholder="Post Title"
                name="title"
                onChange={handleChange}
            />
            <textarea
                rows={5}
                type="text"
                placeholder="Post Desc"
                name="desc"
                onChange={handleChange}
            />
            <button onClick={handleClick}>Add</button>
        </div>
    )
}

export default Add;
