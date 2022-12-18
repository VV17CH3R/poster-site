import React from "react";  
import MyButton from "./UI/button/MyButton";                     


const PostItem = (props) => {       
    return(
            <div className="poster">
            <div className="poster__main">
               <strong> {props.post.id} , Java Scrit студент {props.post.title}!</strong>
                <div className="poster__text_1">
                {props.post.body}. Таковы его навыки в Java Scrit.
                </div>
            </div>
            <div className="poster__btn">         
                <MyButton onClick={()=>props.remove(props.post)}>
                     Удалить запись
                </MyButton> 
            </div>
            </div>
    );  
};

export default PostItem;