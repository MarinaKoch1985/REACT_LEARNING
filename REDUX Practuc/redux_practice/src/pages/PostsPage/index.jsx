import React from 'react'
import { Link } from 'react-router-dom'
import AddPostForm from '../../components/AddPostForm'
import PostContainer from '../../components/PostContainer'

export default function PostsPage() {
  return (
    <div>
        <Link to='/' ><button>Mane Page</button></Link>

        <AddPostForm />
        <PostContainer />
    </div>
  )
}
