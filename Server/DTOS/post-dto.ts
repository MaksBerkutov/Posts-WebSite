import { IPostShema } from '@type/types'
import { ObjectId } from 'mongoose'

export default class PostDto {
	public title: string
	public description: string
	public star: Number
	public tags: String[]
	public published: Date
	public id: ObjectId
	constructor(model: IPostShema) {
		this.id = model._id
		this.title = model.title
		this.description = model.description
		this.star = model.star
		this.tags = model.tags
		this.published = model.published
	}
}
