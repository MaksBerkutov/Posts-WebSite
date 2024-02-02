import React from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
const PreviewText = ({ text }: { text: string }) => {
	return (
		<CKEditor
			editor={ClassicEditor}
			data={text}
			disabled={true}
			config={{
				toolbar: [],
			}}
		/>
	)
}

export default PreviewText
