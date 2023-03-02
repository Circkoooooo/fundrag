import React, { useState } from 'react'
import styled from 'styled-components'
import Left from './views/layouts/Left'
import Main from './views/layouts/Main'
import Right from './views/layouts/Right'
import ElementSelection from './views/elements/ElementSelection'
import { cloneDragComponent, DragComponent } from './encapsulator'
import { DragComponentContext } from './context/DragComponentContext'
import { componentUniqueKey } from './utils/key'

const Background = styled.div`
	width: 100%;
	height: 100%;
	background-color: #f0f0f0;
	display: flex;
`

//TODO:实现main中点击切换元素为dragComponentState

//TODO:编写每个每个组件的逻辑单元测试，要求点击为渲染的元素可以渲染内容，点击已渲染的元素切换state等等。
function App() {
	const [dragComponentState, setDragComponentState] = useState<DragComponent | null>(null)
	const [dragComponentTreeRoot, setDragComponentTreeRoot] = useState<DragComponent[]>([])

	//将选中的组件添加到状态中。
	//需要clone出新对象保证每个元素渲染出不同的实例，可优化。
	const selectDragComponent = (newDragComponent: DragComponent | null) => {
		if (newDragComponent === null) {
			setDragComponentState(null)
		} else {
			const newDragComponentClone = cloneDragComponent(newDragComponent, componentUniqueKey())
			if (dragComponentState === null) {
				setDragComponentState(newDragComponentClone)
				setDragComponentTreeRoot([...dragComponentTreeRoot, newDragComponentClone])
			} else {
				const dragComponentClone = { ...dragComponentState }
				dragComponentClone.children.appendChild(newDragComponentClone)
				setDragComponentState(dragComponentClone)
			}
		}
	}

	//渲染出组件的逻辑 嵌套
	const renderDragComponents = () => {
		const renderChildLoop = (dragComponent: DragComponent) => {
			if (dragComponent.children.value.length === 0) {
				return <dragComponent.RealNode key={dragComponent.key} />
			}
			return (
				<dragComponent.RealNode key={dragComponent.key}>
					{dragComponent.children.value.map((child) => {
						return <child.RealNode key={dragComponent.key} />
					})}
				</dragComponent.RealNode>
			)
		}

		return (
			<>
				{dragComponentTreeRoot.map((dragComponent) => {
					return renderChildLoop(dragComponent)
				})}
			</>
		)
	}

	return (
		<Background>
			<DragComponentContext.Provider
				value={{
					currentDragComponent: dragComponentState,
					setCurrentDragComponent(newDragComponent: DragComponent | null) {
						selectDragComponent(newDragComponent)
					},
				}}
			>
				<Left>
					<ElementSelection />
				</Left>
				<Main>{renderDragComponents()}</Main>
				<Right />
			</DragComponentContext.Provider>
		</Background>
	)
}

export default App
