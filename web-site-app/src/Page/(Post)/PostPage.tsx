import { Nullabel } from '@type/Model/aunth-model'
import { IPost } from '@type/Model/post-model'
import React, { useState } from 'react'
import PostList from './PostList/PostList'
import DetaliPost from './DetaliPost/DetaliPost'

const PostPage = () => {
	const [openPost, setOpenPost] = useState<Nullabel<IPost>>(null)
	return (
		<>
			<div>
				<div>
					<PostList setSelect={post => setOpenPost(post)} />
				</div>
				<div>{openPost && <DetaliPost post={openPost} />}</div>
			</div>
		</>
	)
}

export default PostPage
