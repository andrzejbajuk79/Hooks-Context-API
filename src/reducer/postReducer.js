import * as types from './types'
function postReducer(state, action) {
 const {type, payload} = action

 switch (type) {
  case types.ADD_POST:
   const newPost = payload.post
   return {posts: [newPost, ...state.posts]}

  case types.DELETE_POST:
   console.log(payload, 'payload')

   const deletedPostId = payload.id
   return {posts: state.posts.filter((post) => post.id !== deletedPostId)}

  default:
   return state
 }
}
export default postReducer
