import {useMemo} from 'react';

export const useSortedPosts = (posts, sort) => {
    //формирует массив отсортированных постов
const sortedPosts = useMemo(()=>{
    if(sort){ 
      return [...posts].sort((a,b)=>a[sort].localeCompare(b[sort]))
    }
    return posts;
  },[sort ,posts] ) // здесь лежит отсортированный массив в Кэше
  
  return sortedPosts;
}

//принимает посты метод сортировки и поисковую строку.
export const usePosts = (posts, sort, query) => {
    const sortedPosts = useSortedPosts(posts, sort);
    
    const sortedAndSearch = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(query.toLowerCase()))
  }, [query, sortedPosts] ) 
  
  return sortedAndSearch;
}
