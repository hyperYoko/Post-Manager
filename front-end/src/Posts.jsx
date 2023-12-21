import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Posts()
{
    const [posts,setPosts] = useState([]);
    useEffect( () => {
        const fetchAllPosts = () => {
            fetch("http://localhost:8080/posts")
                .then((response) => response.json())
                .then((data) => setPosts(data))
                .catch((error) => console.log(error));
        }
        fetchAllPosts();
        
    }, [] );

    function handleDelete(id)
    {
        fetch(`http://localhost:8080/posts/${id}`,{method: "DELETE"})
            .then(res=> window.location.reload())
            .catch(err => console.log(err));
    }

    return (
    <>
        <h1>Text Forum</h1>
        <input
            type='text'
            placeholder='Search'
            onChange={ (e)=>search(e.target.value) }
        />    
        <div className="posts">
            {posts.map((post) => (
                <div key={post.id} className="post">
                    
                    <h2>{post.title}</h2>
                    <p>{post.desc}</p>
                    <button className="delete" onClick={() => handleDelete(post.id)}>Delete</button>
                    <button className="update">
                        <Link to={`/update/${post.id}`}>Update</Link>
                    </button>
                </div>
            ))}
        </div>
        <button className="addHome">
            <Link to="/add">Add Post</Link>
        </button>
    </>
        
    )
}

export default Posts;