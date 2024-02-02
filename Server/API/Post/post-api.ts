import { Router } from 'express'
import postController from '@controller/post-controller'
import { body } from 'express-validator'
import authMiddleware from '@middlware/auth-middleware'
import accessMiddleware from '@middlware/access-middleware'
const PostApi: Router = Router()

//post
PostApi.get('/:id', authMiddleware, postController.GetPost)
PostApi.post(
	'/posts',
	body('limit')
		.exists()
		.withMessage('limit не передан')
		.isInt()
		.withMessage('limit должен быть цифрой')
		.toInt()
		.isInt({ min: 5, max: 15 })
		.withMessage('limit должен быть 5-15'),
	body('page')
		.exists()
		.withMessage('page не передан')
		.isInt()
		.withMessage('page должен быть цифрой'),

	authMiddleware,
	postController.GetPosts
)
PostApi.put('/create', authMiddleware, accessMiddleware, postController.Create)
PostApi.post('/delete', authMiddleware, accessMiddleware, postController.Delete)
PostApi.post('/update', authMiddleware, accessMiddleware, postController.Update)

export default PostApi
