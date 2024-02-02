import { IPost } from '@type/Model/post-model'
import React from 'react'
type DetalIProps = {
	post: IPost
}
const DetaliPost = ({ post }: DetalIProps) => {
	return (
		<div>
			<div>
				<p>{post.authorName}</p>
			</div>
		</div>
	)
}

export default DetaliPost
