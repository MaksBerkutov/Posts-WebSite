require('dotenv').config()

import { Request, Response, NextFunction } from 'express'
import ApiError from '@exeptions/api-error'
import { validationResult } from 'express-validator'
import postService from '@service/post-service'
import { AuthenticatedRequest } from '@type/types'

class PostController {
	async GetPosts(req: Request, res: Response, next: NextFunction) {
		try {
			const errors = validationResult(req)
			if (!errors.isEmpty()) {
				return next(
					ApiError.BadRequest(
						'Ошибка при валидации',
						errors.array().map(obj => obj.msg)
					)
				)
			}
			const { limit, page } = req.body
			const data = await postService.GetPosts(limit, page)
			return res.json({
				limit,
				page,
				...{ data },
			})
		} catch (e) {
			next(e)
		}
	}
	async GetPost(req: Request, res: Response, next: NextFunction) {
		try {
			const id = req.params.id
			const post = await postService.GetPost(id)
			return res.json({ post })
		} catch (e) {
			next(e)
		}
	}
	async Create(req: AuthenticatedRequest, res: Response, next: NextFunction) {
		try {
			const { title, description } = req.body
			const post = await postService.Create(
				title,
				description,
				req.user.id.toString()
			)
			return res.json({ post })
		} catch (e) {
			next(e)
		}
	}
	async Delete(req: AuthenticatedRequest, res: Response, next: NextFunction) {
		try {
			const { postid } = req.body
			const post = await postService.Remove(postid, req.user.id.toString())
			return res.json({ post })
		} catch (e) {
			next(e)
		}
	}
	async Update(req: AuthenticatedRequest, res: Response, next: NextFunction) {
		try {
			const { id, title, description } = req.body
			const post = await postService.Update(
				title,
				description,
				id,
				req.user.id.toString()
			)
			return res.json({ title, description, id })
		} catch (e) {
			next(e)
		}
	}
}
export default new PostController()
