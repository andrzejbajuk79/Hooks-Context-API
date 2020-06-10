import React, {
 useState,
 useEffect,
 useCallback,
 useContext,
 useReducer,
 createContext,
} from 'react'
import './App.css'
import Login from './components/Login'
import Header from './components/Header'
import CreatePost from './components/CreatePost'
import PostList from './components/PostList'
import postReducer from './reducer/postReducer'

export const UserContext = createContext()
export const PostContext = createContext({
 posts: [],
})

function App() {
 const initialPostState = useContext(PostContext)
 const [state, dispatch] = useReducer(postReducer, initialPostState)
 const [user, setUser] = useState('reed')

 useEffect(() => {
  document.title = user ? `${user}'s  Feed` : 'Please Login'
 }, [user])

 //przy kazdym renderze tworzymy unikalna kopie naszego callbacka
 //przekazywanego do komponentu , zeby tego unikanc uzywamy useCallback
 // const handleAddPost = useCallback(
 //  (newPost) => {
 //   setPosts([newPost, ...posts])
 //  },
 //  [posts]
 // )

 if (!user) {
  return <Login setUser={setUser} />
 }
 return (
  <PostContext.Provider value={{state, dispatch}}>
   <UserContext.Provider value={user}>
    <Header user={user} setUser={setUser} />
    <CreatePost
     user={user}
     // handleAddPost={handleAddPost}
    />
    <PostList posts={state.posts} />
   </UserContext.Provider>
  </PostContext.Provider>
 )
}

export default App
