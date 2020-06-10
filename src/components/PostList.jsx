import React from 'react'
// import PropTypes from 'prop-types'
import Post from './Post'

const PostList = ({posts}) => {
 return posts.map((post, i) => <Post {...post} key={post.id} />)
}

// PostList.propTypes = {}

export default PostList
