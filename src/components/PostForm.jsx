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
                placeholder="Заголовок"
                onChange = {e => setPost({...post, title: e.target.value})}
                />
              <MyInput 
                value={post.body}
                type="text" 
                placeholder="Описание"
                onChange = {e => setPost({...post, body: e.target.value})}
                />
              <MyButton style={{width:'366px'}} onClick={addNewPost} > Добавить заметку </MyButton>   
            </form>
        </div>
    );  
};

export default PostForm;