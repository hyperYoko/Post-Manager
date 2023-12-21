import React from "react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Update() {
    const [post,setPost] = useState({
        name:"",
        desc:"",
    })
    function handleChange(e) {
        setBook((prevState) => ({...prevState, [e.target.name]: e.target.value}));
    }
    const location = useLocation();
    const bookId = location.pathname.split("/")[2];
    const navigate = useNavigate();
    
    function handleClick(e) {
        e.preventDefault();
        fetch(`http://localhost:8080/posts/${postId}`, {
			method: "PUT", 
			body: JSON.stringify(post), 
			headers: { "Content-Type": "application/json" } 
		})
			.then(res=> navigate("/"))
			.catch(err => console.log(err))
    }
    
    return(
        <div className="form">
            <h1>Update Post</h1>
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
            
            <button onClick={handleClick}>Update</button>
        </div>
    )
}

export default Update;