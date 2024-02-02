import { Schema, model } from 'mongoose'
import { ICommentShema } from '@type/types'
const CommentSchema = new Schema<ICommentShema>({
	post: { type: Schema.Types.ObjectId, ref: 'Post', required: true },
	owner: { type: Schema.Types.ObjectId, ref: 'User', required: true },
	text: { type: String, required: true },
})

export default model('Comment', CommentSchema)
