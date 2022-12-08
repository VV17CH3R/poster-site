import React from "react";  
import MyInput from "./UI/input/MyInput";      
import MySelector from "./UI/selector/MySelector";

const PostFilter = ({filter, setFilter}) => {   
                          
                       
    return(
        
       <div className="App">
            

<MyInput 

       placeholder='Search...'
       value={filter.query}
       onChange={e => setFilter({...filter, query:e.target.value})}

/>
 <br></br>
 <MySelector value={filter.sort} 
       onChange={newSorts => setFilter({...filter, sort:newSorts}) }
       defaultValue='Select by' 
       options={[
         {value: 'title', name:'student name'}, 
         {value: 'body', name:'student stack'}
       ]}
 />
 
 </div>

     
    );  
};

export default PostFilter;

