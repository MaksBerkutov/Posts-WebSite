import React from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
interface CreateTextProps {
	text: string
	setText: (newText: string) => void
}

const CreateText = ({ text, setText }: CreateTextProps) => {
	const handleChange = (event: any, editor: any) => {
		const data = editor.getData()
		setText(data)
	}
	return (
		<div>
			<CKEditor editor={ClassicEditor} data={text} onChange={handleChange} />
		</div>
	)
}

export default CreateText
