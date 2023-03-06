import React, { ReactNode } from 'react'
import { createDragComponent } from '../../../../encapsulator'
import { LinearContainer } from './Linear.styled'

type LinearProps = {
	children: ReactNode
	onClick: () => void
}

const Linear: React.FC<LinearProps> = ({ children, onClick }) => {
	return <>{children}</>
}

export default createDragComponent(Linear, {
	isContainer: true,
	componentName: '线性组件',
})
