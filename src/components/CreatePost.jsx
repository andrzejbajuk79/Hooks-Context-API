import React, {useState, useRef, useContext} from 'react'
import {PostContext} from '../App'
import * as types from '../reducer/types'

const CreatePost = ({user, handleAddPost}) => {
 const {dispatch} = useContext(PostContext)
 const [content, setContent] = useState('')
 const [image, setImage] = useState(null)
 const imageInputRef = useRef()

 function handleSubmit(e) {
  e.preventDefault()
  const post = {content, image, user, id: Date.now()}
  // handleAddPost(post)
  dispatch({type: types.ADD_POST, payload: {post}})
  setContent('')
  imageInputRef.current.value = ''
 }
 return (
  <div>
   <h1>Create new Post</h1>
   <form onSubmit={handleSubmit}>
    <input
     value={content}
     onChange={(e) => setContent(e.target.value)}
     type="text"
     placeholder="Add post content"
    />
    <input //
     ref={imageInputRef}
     onChange={(e) => setImage(e.target.files[0])}
     type="file"
    />
    <button type="submit">Submit</button>
   </form>
  </div>
 )
}

export default CreatePost
