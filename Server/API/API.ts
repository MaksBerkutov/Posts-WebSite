import { Router } from 'express'
import userController from '@controller/user-controller'
import { body } from 'express-validator'
import authMiddleware from '@middlware/auth-middleware'
import PostApi from './Post/post-api'
const router: Router = Router()

router.post(
	'/registration',
	body('Email').isEmail().withMessage('Некоректнная почта'),
	body('Password')
		.matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/)
		//.isLength({ min: 5, max: 10 })
		.withMessage(
			'Пароль должен быть меньше 6 символов, не содержать пробелы,иметь хотя бы одну букву и цифру '
		),
	body('Login')
		.matches(/^(?=.*[A-Za-z0-9]$)[A-Za-z][A-Za-z\d.-_]{5,19}$/)
		.withMessage(
			'Логин должен быть 5-19 символов, не содержать пробелы,иметь хотя бы одну букву и цифру '
		),
	userController.Registration
)
router.post('/login', userController.Login)
router.post('/logout', userController.Logout)
router.get('/activated/:link', userController.Activated)
router.get('/refresh', userController.Refresh)
router.get('/users', authMiddleware, userController.getUsers)
//post
router.use('/post', PostApi)

export default router
