import { ILang } from '@type/Model/lang-model'
import { RU } from './Code/ru'
import { EN } from './Code/en'
import { UA } from './Code/ua'

const KeyModel: Map<string, ILang> = new Map([
	['RU', RU],
	['EN', EN],
	['UA', UA],
])

export default function GetModel(code: string): Promise<ILang | undefined> {
	return new Promise((resolve, reject) => {
		const item = KeyModel.get(code)

		if (item) {
			resolve(item)
		} else {
			reject(new Error('Item not found'))
		}
	})
}
export function GetAllKey(): Array<string> {
	return Array.from(KeyModel.keys())
}
