import ApiError from '@exeptions/api-error'
import tokenService from '@service/token-service'
import { Response, NextFunction } from 'express'
import { AuthenticatedRequest, IUserShema } from '@type/types'
import UserDto from '@dtos/user-dto'

export default function (
	req: AuthenticatedRequest,
	res: Response,
	next: NextFunction
) {
	try {
		const user = req.user
		if (!user) {
			return next(ApiError.UnauthorizedError())
		}
		if (!user.isAdmin) {
			return next(ApiError.AccessError())
		}
		next()
	} catch (error) {
		return next(ApiError.AccessError())
	}
}
