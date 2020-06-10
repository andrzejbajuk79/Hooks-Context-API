import React, {useContext} from 'react'
import {UserContext, PostContext} from '../App'
import * as types from '../reducer/types'

const Post = ({image, user, content, id}) => {
 const currentUser = useContext(UserContext)
 const {dispatch} = useContext(PostContext)
 const isCurrent = currentUser === user

 function handleDeletePost() {
  dispatch({type: types.DELETE_POST, payload: {id}})
 }
 return (
  <>
   <>
    {image && (
     <img
      alt="Post cover "
      style={{height: 100, width: 200, objectFit: 'cover'}}
      src={URL.createObjectURL(image)}
     />
    )}
    <p>{content}</p>
    <div style={{color: isCurrent && 'green'}}>{user}</div>
    <div>{isCurrent && <button onClick={handleDeletePost}>Delete</button>}</div>
   </>
  </>
 )
}

export default Post
