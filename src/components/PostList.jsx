import React from "react";  
import PostItem from "./PostItem";
import {
    CSSTransition,
    TransitionGroup,
  } from 'react-transition-group';

const PostList = ({posts, title, remove}) => {   
    if(!posts.length){
        return (
            <div style={{fontSize: '30px'}}>Информация не найдена</div>
        )
    }                
    return(
         <div style={{width: '680px', margin:'0 auto'}}> 
            <h1 style={{fontSize: '2em'}}> 
             {title}
            </h1>
            <TransitionGroup>
                    {posts.map((post, index) =>
                        <CSSTransition
                        key={post.id} 
                        timeout={500}
                        classNames="post"
                        >
                        <PostItem remove={remove} number={index +1} post={post}  />
                        </CSSTransition>
                    )}
             </TransitionGroup>
          </div>
    );  
};

export default PostList;