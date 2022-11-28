import PostsContainer from "../PostContainer";
import { useState, useEffect } from 'react'
import { posts_data } from '../../data/posts'
import { Context } from '../../context'
import AddPostForm from "../AddPostForm"; 

function App() {

  const [ posts, setPosts ] = useState(posts_data);

  useEffect(() => {
    const res = JSON.parse(localStorage.getItem('posts'));
    if (res) setPosts(res)
  }, []);// следить за состоянием не нужно, функция запускается один раз при перезагрузке страницы


  useEffect(() => {
    localStorage.setItem('posts', JSON.stringify(posts) )
  }, [posts]);// функция выпоняется каждый раз при изменении состояния posts

  // второй аргумент - указание на то, за каким состоянием надо следить


  const change_like = (id) => {
    // Найти карточку по айди - метод find()
    const target_card = posts.find(el => el.id === id);

    // У найденной карточки меняем значение свойства like на противоположное
    target_card.like = !target_card.like;

    // Отследить изменение состояния (setPosts)
    setPosts([...posts]);
  }

  const add_post = (title, text) => setPosts([
      ...posts,
      {
        id: Date.now(),
        title,
        text,
        like: false,
        comments: []
      }

      
  ]);

  const add_comment = (post_id, text) => {

    const comment = {
      id: Date.now(), 
      comment: text
    }

    const target_post = posts.find(el => el.id === post_id);
    target_post.comments.push(comment);
    setPosts([...posts]);
  }

    const delete_post = post_id => setPosts(posts.filter(el => el.id !== post_id));

    const delete_comment = (post_id, comment_id) => {
      const target_post = posts.find(el => el.id === post_id);
      target_post.comments = target_post.comments.filter(el => el.id !== comment_id);

      setPosts([...posts])
    }

  return (
    <div>
      <Context.Provider value={{ posts, change_like ,add_post, add_comment, delete_post, delete_comment}}>
        <AddPostForm />
        <PostsContainer />
      </Context.Provider>
    </div>
  );
}

export default App;