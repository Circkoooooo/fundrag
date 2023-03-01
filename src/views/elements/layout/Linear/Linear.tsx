import React, { ReactNode } from 'react'
import { createDragComponent } from '../../../../Encapsulator'

type LinearProps = {
	children: ReactNode
}

const Linear: React.FC<LinearProps> = ({ children }) => {
	return <div>{children}</div>
}

export default createDragComponent(Linear, {
	isContainer: false,
	componentName: '线性组件',
})
