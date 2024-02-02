import React, { useEffect, useState } from 'react'
import { IPost } from '@type/Model/post-model'
import { GetPosts } from '@api/post'
import PostItem from './PostItem/PostItem'
interface PageControl {
	page: number
	count: number
}
const PostList = ({setSelect}:{setSelect:(post:IPost)=>void}) => {
	const [posts, setPosts] = useState<Array<IPost>>([])
	const [pageControl, setPageControl] = useState<PageControl>({
		page: 0,
		count: 0,
	})

	const updatePage = async (page: number) => {
		const respone = await GetPosts(page)
		setPosts(respone.data)
		setPageControl({
			page,
			count: respone.count,
		})
	}
	useEffect(() => {
		const fetch = async () => {
			await updatePage(0)
		}
		fetch()
	}, [])

	const goNextPage = async () => {
		await updatePage(pageControl.page + 1)
	}
	const goPrevPage = async () => {
		await updatePage(pageControl.page - 1)
	}
	return (
		<>
			<div>
				{posts.map(value => (
					<PostItem post={value} key={value.id} onClickHandler={setSelect} />
				))}
			</div>
			<div>
				{pageControl.page > 0 && <button onClick={goPrevPage}>Prev</button>}
				{pageControl.page}
				{pageControl.page + 1 < pageControl.count && (
					<button onClick={goNextPage}>Next</button>
				)}
			</div>
		</>
	)
}

export default PostList
