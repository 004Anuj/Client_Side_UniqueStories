import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
function AddStory() {
    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")
    const [PlaceOfOrigin, setPlaceOfOrigin] = useState("")
    const [Description, setDescription] = useState("")

    const handleTittle = (e) => {
        setTitle(e.target.value)
    }

    const handleAuthor = (e) => {
        setAuthor(e.target.value)
    }

    const handlePlaceOfOrigin = (e) => {
        setPlaceOfOrigin(e.target.value)
    }
    const handleDescribe = (e) => {
        setDescription(e.target.value)
    }

    const handleAdd = async (e) => {
        e.preventDefault();
    
        try {
            await axios.post('https://s47-unique-stroies.onrender.com/addStory', {
                title,
                author, 
                PlaceOfOrigin,
                Description
            });
    
            
        } catch (error) {
            console.error('Error adding story:', error);
            alert(error.message);
        }
    };
    return (

        <div>
            <form onSubmit={handleAdd}>
                <h1>ADD STORY</h1>
                <div>
                    <label>Title</label>
                    <input type="text" placeholder="Title" onChange={handleTittle} required/>
                </div>
                <div>
                    <label>Author</label>
                    <input type="text" placeholder="Author" onChange={handleAuthor} required/>
                </div>
                <div>
                    <label>Place of Origin</label>
                    <input type="text" placeholder="Place of Origin" onChange={handlePlaceOfOrigin} required />
                </div>
                <div>
                    <label>Describe</label>
                    <input type="textarea" placeholder="Describe" onChange={handleDescribe} />
                </div>
                
                <button type="submit">Add</button>
            </form>
            <div><Link to={"/"}><button className='back'>Back</button></Link></div>
        </div>
    )
}
export default AddStory