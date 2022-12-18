import React from "react";  
import MyInput from "./UI/input/MyInput";      
import MySelector from "./UI/selector/MySelector";

const PostFilter = ({filter, setFilter}) => {                        
    return(
       <div className="App">
              <MyInput 
                     placeholder='Поиск...'
                     value={filter.query}
                     onChange={e => setFilter({...filter, query:e.target.value})}
              />
              <br></br>
              <MySelector value={filter.sort} 
                     onChange={newSorts => setFilter({...filter, sort:newSorts}) }
                     defaultValue='Сортировать по' 
                     options={[
                            {value: 'title', name:'Заголовку'}, 
                            {value: 'body', name:'Описанию'}
                     ]}
              />
 
       </div>
    );  
};
export default PostFilter;

