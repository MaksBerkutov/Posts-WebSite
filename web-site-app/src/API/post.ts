import { IPost, IPostResponse } from '@type/Model/post-model'
import $api from '@http/index'
export async function GetPosts(
	page: number,
	limit: number = 10
): Promise<IPostResponse> {
	const response = await $api.post<IPostResponse>(`/post/posts`, {
		limit,
		page,
	})
	return response.data
}

export async function GetPost(id: string): Promise<IPost> {
	const response = await $api.get<IPost>(`/post/${id}`)
	return response.data
}

export async function CretaePost(
	title: string,
	description: string
): Promise<IPost> {
	const response = await $api.put<IPost>(`/post/create`, {
		title,
		description,
	})
	return response.data
}
export async function DeletePost(id: string): Promise<IPost> {
	const response = await $api.post<IPost>(`/post/delete`, {
		id,
	})
	return response.data
}
export async function UpdatePost(
	title: string,
	description: string,
	id: string
): Promise<IPost> {
	const response = await $api.put<IPost>(`/post/create`, {
		title,
		description,
		id,
	})
	return response.data
}
