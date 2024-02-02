import { Schema, model } from 'mongoose'
import { IPostShema } from '@type/types'
const PostSchema = new Schema<IPostShema>({
	owner: { type: Schema.Types.ObjectId, ref: 'User', required: true },
	description: { type: String, required: true },
	title: { type: String, required: true },
	star: { type: Number, required: true },
	tags: { type: [String], required: true },
	published: { type: Date, required: true },
})

export default model('Post', PostSchema)
