import PostDto from '@dtos/post-dto'
import ApiError from '@exeptions/api-error'
import postModel from '@model/post-model'
import userModel from '@model/user-model'
import { IPostShema, IResponeComment } from '@type/types'
class PostService {
	public async GetPost(id: string): Promise<PostDto> {
		const post = await postModel.findById(id)
		if (!post) throw ApiError.BadRequest('Не найден пост с таким id')
		return new PostDto(post)
	}
	public async GetPosts(Limit: number, Page: number): Promise<IResponeComment> {
		const startIndex = (Page - 1) * Limit
		const totalPosts = await postModel.countDocuments().exec()
		const totalPages = Math.ceil(totalPosts / Limit)
		if (Page > totalPages)
			throw ApiError.BadRequest('Page больше чем общее количество страниц')

		const data = await postModel.find().limit(Limit).skip(startIndex).exec()
		return {
			data: data.map(value => {
				return new PostDto(value)
			}),
			isLast: Page === totalPages,
			count: totalPages,
		}
	}
	public async Create(title: string, description: string, ownerid: string) {
		const candidate = await userModel.findById(ownerid)
		if (!candidate) throw ApiError.UnauthorizedError()
		const post = await postModel.create({ title, description, owner: ownerid })

		return new PostDto(post)
	}
	public async Remove(postid: string, ownerid: string) {
		const candidate = await userModel.findById(ownerid)
		if (!candidate) throw ApiError.UnauthorizedError()
		const post: IPostShema = await postModel.findById(postid)
		if (!post) throw ApiError.BadRequest('Не найден пост')
		if (post.owner.toString() !== ownerid) throw ApiError.AccessError()
		return new PostDto(post)
	}
	public async Update(
		title: string,
		description: string,
		postid: string,
		ownerid: string
	) {
		const candidate = await userModel.findById(ownerid)
		if (!candidate) throw ApiError.UnauthorizedError()
		const post = await postModel.findById(postid)
		if (!post) throw ApiError.BadRequest('Не найден пост')
		if (post.owner.toString() !== ownerid) throw ApiError.AccessError()
		post.title = title
		post.description = description
		return await post.save()
	}
}

export default new PostService()
