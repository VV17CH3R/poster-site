import React, {useState} from "react";  
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";

                          

const PostForm = ({create}) => {   
    
    const [post, setPost] = useState({ title: '', body: ''})
    const addNewPost = (e) => {
        e.preventDefault()
        const newPost = {
            ...post , id: Date.now()
        }
        create(newPost)
        setPost({ title: '', body: ''})
      }
                          
                       
    return(
        <div className="App">
            <form>
              <MyInput 
                value={post.title}
                type="text" 
                placeholder="Name of Student"
                onChange = {e => setPost({...post, title: e.target.value})}
                />
              <MyInput 
                value={post.body}
                type="text" 
                placeholder="Stack level"
                onChange = {e => setPost({...post, body: e.target.value})}
                />
              <MyButton onClick={addNewPost} > Add Student Now! </MyButton>
                
            </form>

        </div>
    );  
};

export default PostForm;