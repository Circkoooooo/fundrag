import React, { ReactNode } from 'react'
import { createDragComponent } from '../../../../encapsulator'
import { LinearContainer } from './Linear.styled'

type LinearProps = {
	children: ReactNode
	onClickFn: () => {}
}

const Linear: React.FC<LinearProps> = ({ children, onClickFn }) => {
	return (
		<LinearContainer
			onClick={(event) => {
				event.stopPropagation()
				onClickFn && onClickFn()
			}}
		>
			{children}
		</LinearContainer>
	)
}

//TODO: 将createDragComponent实现成原型模式，在每次实例化的时候都要创建一些固定的内容，目前有key。
export default createDragComponent(Linear, {
	isContainer: true,
	componentName: '线性组件',
})
