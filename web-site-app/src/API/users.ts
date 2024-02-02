import { IUser } from '@type/Model/user-model'
import $api from '@http/index'
export async function GetUsers(): Promise<Array<IUser>> {
	const response = await $api.get<Array<IUser>>(`/users`)
	return response.data
}
