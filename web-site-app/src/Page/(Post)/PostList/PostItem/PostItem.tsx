import { IPost } from '@type/Model/post-model'
import React from 'react'

const PostItem = ({
	post,
	onClickHandler,
}: {
	post: IPost
	onClickHandler: (post: IPost) => void
}) => {
	return (
		<div className='blog-container'>
			<div className='blog-header'>
				<div className='blog-author--no-cover'>
					<h3>{post.authorName}</h3>
				</div>
			</div>

			<div className='blog-body'>
				<div className='blog-title'>
					<h1>
						<a  onClick={() => onClickHandler(post)}>
							{post.title}
						</a>
					</h1>
				</div>
				<div className='blog-summary'>
					<p>{/*Mini description*/}</p>
				</div>
				<div className='blog-tags'>
					<ul>
						{post.tags.map((value, index) => (
							<li key={index}>
								<a href={value}>{value}</a>
							</li>
						))}
					</ul>
				</div>
			</div>

			<div className='blog-footer'>
				<ul>
					<li className='published-date'>12 days ago</li>
					<li className='comments'>
						<a href='/'>
							<svg className='icon-bubble'>
								{/*<use xlink:href='#icon-bubble'></use>*/}
							</svg>
							<span className='numero'>{post.comment}</span>
						</a>
					</li>
					<li className='shares'>
						<a href='/'>
							<svg className='icon-star'>
								{/*<use xlink:href='#icon-star'></use>*/}
							</svg>
							<span className='numero'>{post.star}</span>
						</a>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default PostItem
