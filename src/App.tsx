import React, { useState } from 'react'
import styled from 'styled-components'
import Left from './views/layouts/Left'
import Main from './views/layouts/Main'
import Right from './views/layouts/Right'
import ElementSelection from './views/elements/ElementSelection'
import { cloneDragComponent, DragComponent } from './encapsulator'
import { DragComponentContext } from './context/DragComponentContext'
import { componentUniqueKey } from './utils/key'
import { componentPackages } from './views/elements'

const Background = styled.div`
	width: 100%;
	height: 100%;
	background-color: #f0f0f0;
	display: flex;
`

//TODO:实现main中点击切换元素为dragComponentState

//TODO:编写每个每个组件的逻辑单元测试，要求点击为渲染的元素可以渲染内容，点击已渲染的元素切换state等等。
function App() {
	const [currentDragComponent, setCurrentDragComponent] = useState<DragComponent | null>(null)
	const [dragComponentTree, setDragComponentTree] = useState<DragComponent[]>([])

	//render component to target component
	const selectDragComponent = (__newDragComponent: DragComponent) => {
		const newDragComponent = cloneDragComponent(__newDragComponent, componentUniqueKey())

		if (currentDragComponent === null) {
			setDragComponentTree([...dragComponentTree, newDragComponent])
		} else {
			const dragComponentClone = { ...currentDragComponent }
			dragComponentClone.children.appendChild(newDragComponent)
			setCurrentDragComponent(dragComponentClone)
		}
	}

	//change target component
	const changeCurrentDragComponent = (newDragComponent: DragComponent | null) => {
		if (newDragComponent === null) {
			setCurrentDragComponent(null)
		} else {
			setCurrentDragComponent(newDragComponent)
		}
	}

	return (
		<Background>
			<DragComponentContext.Provider
				value={{
					currentDragComponent,
					setCurrentDragComponent(newDragComponent: DragComponent | null) {
						changeCurrentDragComponent(newDragComponent)
					},
					selectDragComponent,
				}}
			>
				<Left>
					<ElementSelection onItemClick={(dragComponent) => selectDragComponent(dragComponent)} componentPackages={componentPackages} />
				</Left>
				<Main dragComponentTree={dragComponentTree} />
				<Right />
			</DragComponentContext.Provider>
		</Background>
	)
}

export default App
