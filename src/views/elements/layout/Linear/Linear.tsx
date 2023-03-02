import React, { ReactNode } from 'react'
import { createDragComponent } from '../../../../encapsulator'
import { LinearContainer } from './Linear.styled'

type LinearProps = {
	children: ReactNode
}

const Linear: React.FC<LinearProps> = ({ children }) => {
	return <LinearContainer>{children}</LinearContainer>
}

export default createDragComponent(Linear, {
	isContainer: true,
	componentName: '线性组件',
})
