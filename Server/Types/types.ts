import { ObjectId } from 'mongoose'
import { Request } from 'express'
import UserDto from '@dtos/user-dto'
import PostDto from '@dtos/post-dto'

interface IToken {
	accessToken: string
	refreshToken: string
}
interface IUserShema {
	_id: ObjectId
	email: string
	login: string
	passworld: string
	isActiveted: Boolean
	isAdmin: Boolean
	activationLink: string
}
interface ITokenShema {
	_id: ObjectId
	user: ObjectId
	ip: string
	refreshToken: string
}
interface IUserData {
	tokens: IToken
	user: UserDto
}
interface AuthenticatedRequest extends Request {
	user: UserDto
}
interface IPostShema {
	_id: ObjectId
	owner: ObjectId
	description: string
	title: string
	star: number
	tags: Array<string>
	published: Date
}
interface ICommentShema {
	_id: ObjectId
	post: ObjectId
	owner: ObjectId
	text: string
}
interface IResponeComment {
	count: Number
	isLast: Boolean
	data: Array<PostDto>
}
export type {
	IToken,
	IUserShema,
	ITokenShema,
	AuthenticatedRequest,
	IUserData,
	IPostShema,
	ICommentShema,
	IResponeComment,
}
