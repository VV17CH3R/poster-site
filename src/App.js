import React, { useState , useEffect } from 'react';
import Counter from './components/Counter'
import ClassCounter from './components/ClassCounter';
import './styles/App.css';
import PostList from './components/PostList';
import { useRef } from 'react';
import PostForm from './components/PostForm';
import PostFilter from './components/PostFilter';
import MyModal from './components/UI/modal/MyModal';
import MyButton from './components/UI/button/MyButton';
import {usePosts} from './hooks/usePosts';
import PostService from './API/PostService';
import Loader from './components/UI/Loader/Loader';
import { useFetching } from './hooks/useFetching';
import {getPageCount, getPagesArray} from './utils/pages'


function App() {

//Не управляемый инпут через useRef
  const bodyInputRef = useRef()
  const sendConsole = () => {
  console.log(bodyInputRef.current.value)
  }

  //ОСНОВНОЙ МАССИВ
  const [posts, setPosts] = useState([])

// Функция создания студента 
  const createPost = (newPost) => {
   setPosts([...posts, newPost])
   setModal(false)
  }  
  
// Функция удаления студента 
  const removePost = (post) => {
  setPosts(posts.filter(p => p.id !== post.id))
  }

  // пагинация
   // fletchPosts ... response response.data (переменные)
  const [totalPages, setTotalPages] = useState('0');
   const [limit, setLimit] = useState('10');
   const [page, setPage] = useState('1');
   
   // Получаем количество страниц для пагинации
   let pagesArray = getPagesArray(totalPages);

  const [filter, setFilter] = useState({sort:'',query:''})
//видимость модального окна СОСТОЯНИЕ
  const [modal, setModal] = useState(false)
// Декомпозиция кода в хуки.
  const sortedAndSearch = usePosts(posts, filter.sort, filter.query)

//Работа с базой данных МАССИВ ЗАВИСИМОСТЕЙ
// [page]
  useEffect(() => { fetchPosts()  },[page])
     
   //за показ индикатора теперь отвечает хук
   //хук предоставляет работу с ошибками данных и сам загрузочный контент
   const [fetchPosts, isPostsLoading, postError] = useFetching(async()=>{
    const response = await PostService.getAll(limit, page)
      setPosts(response.data)
      const totalCount = response.headers['x-total-count'];
      setTotalPages(getPageCount(totalCount, limit));
   })

   const changePage = (page) => {
    setPage(page)
   }



   






















   

  return (
    <div className="App">
      
      <MyButton style={{marginTop: '50px'}} onClick={()=>setModal(true)}>
         Add new abiturient 
      </MyButton>
     
     <MyModal visible={modal} setVisible={setModal}> 
        <PostForm create={createPost}/> 
     </MyModal>
     
     
     
     <hr style={{margin:'15px 0'}}></hr>



     Search student:
     
     

     <PostFilter filter={filter} setFilter={setFilter}/>

     {postError &&
     <h1>Error! Message: ${postError}</h1>
     }

     {isPostsLoading
     ?  <div style={{marginTop:'50px',display:'flex',justifyContent:'center'}}><Loader/></div>
     :  <PostList onChange={sendConsole} remove={removePost} 
        posts={sortedAndSearch}
        title='Abiturient list '/>
     }

     
      <div className='page__wrapper'>
          {pagesArray.map(p => 
          <span 
             onClick={() => changePage(p)}
             key={p} className={page === p ? 'page page__current': 'page'}>
             {p}</span>
          )}
      </div>
      
     
     
     <div style={{display:'flex'}}>
     
     <Counter/> 
     
     <ClassCounter/>
     </div>
     <br></br>

      !Support!   Tell us your problem: 
      
      <input onKeyPress={sendConsole} 
       ref={bodyInputRef} type='text'>
      </input>
      
    </div> 
    
  );

}

export default App;


