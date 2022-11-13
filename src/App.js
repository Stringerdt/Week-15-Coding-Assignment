import { useEffect, useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './App.css'
import PostForm from './components/PostForm'
import PostList from './components/PostList'


// api endpoint: https://636fc820f2ed5cb047e54e0b.mockapi.io/:endpoint
const API_URL = 'https://636fc820f2ed5cb047e54e0b.mockapi.io/Posts'

function App() {
  const [postList, setPostList] = useState([]);

  // function to fetch posts from API, depending on given endpoint and id
  const getPosts = async () => {
    // fetch request to the API endpoint (with id if given)
    const res = await fetch(`${API_URL}`);
    // the response in json and set to data
    const data = await res.json();
    // sets the postList to the data retrieved 
    setPostList(data);
    console.log(data);
  }

  const deletePost = async (id) => {
    // fetches the target post and sends DELETE request 
    await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
    // gets posts again to re-render list
    getPosts();
  }

  const addPost = async ({ title, content }) => {
    // sets info for POST request
    const reqOptions = {
      method: 'POST',
      body: JSON.stringify({
        title: title,
        content: content
      }),
      headers: { 'content-type': 'application/json' },
      // gets response from API after added post to get updated postList, then sets state accordingly
    };
    const res = await fetch(`${API_URL}`, reqOptions);
    const data = await res.json();
    setPostList(data);
    // re-render all posts after state updated
    getPosts();
  }

  const editPost = async ({ id, title, content }) => {
    // same as before, set the info for the put request
    const reqOptions = {
      method: 'PUT',
      body: JSON.stringify({
        title: title,
        content: content
      }),
      headers: { 'content-type': 'application/json' },
    };
    // another fetch and res.json(), then reset the postList to the new postList
    const res = await fetch(`${API_URL}/${id}`, reqOptions);
    const data = await res.json();
    setPostList(data);
    getPosts();
  }

  // useEffect to use getPosts for all posts on render
  useEffect(() => {
    getPosts();
  }, [])

  // app to render, passing in props where needed
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-sm-8 border-end border-bottom'>
          <h1 className='text-center my-3 fw-bold'>Your Posts</h1>
          {/* pass in the postList and the props for deleting and editing posts */}
          <PostList
            postList={postList}
            deletePost={deletePost}
            editPost={editPost} />
        </div>
        <div className='col-sm-4 border-bottom p-3'>
          {/* pass in the addPost prop to allow creation of new posts */}
          <PostForm addPost={addPost} />
        </div>
      </div>
    </div>
  );
}

export default App;
