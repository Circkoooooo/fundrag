import React, { useRef } from 'react'
import { MainContainer, MainScreen } from './styled'
import { DragComponentContext } from '../../../context/DragComponentContext'
import { DragComponent } from '../../../encapsulator'

interface MainProps {
	dragComponentTree: DragComponent[]
}

const Main: React.FC<MainProps> = ({ dragComponentTree }) => {
	const isRendered = useRef<boolean>(false)
	const selectFnCache = useRef<DragComponent | null>(null)

	//circulate rendering and bind click event
	const renderDragComponents = (selectFn: (dragComponent: DragComponent) => void) => {
		const renderChildLoop = (dragComponent: DragComponent) => {
			if (dragComponent.children.value.length === 0) {
				return (
					<dragComponent.RealNode
						key={dragComponent.key}
						onSelectFn={() => {
							selectFn(dragComponent)
							selectFnCache.current = dragComponent
						}}
					/>
				)
			}

			return (
				<dragComponent.RealNode
					key={dragComponent.key}
					onSelectFn={() => {
						// 1.child  2.parent
						if (selectFnCache.current !== null) {
							selectFn(selectFnCache.current)
							if (dragComponent.key !== selectFnCache.current.key) {
								selectFnCache.current = null
							}
						} else {
							selectFnCache.current = dragComponent
							selectFn(dragComponent)
						}
					}}
				>
					{dragComponent.children.value.map((child) => {
						return renderChildLoop(child)
					})}
				</dragComponent.RealNode>
			)
		}

		return (
			<>
				{dragComponentTree.map((dragComponent) => {
					return renderChildLoop(dragComponent)
				})}
			</>
		)
	}

	return (
		<DragComponentContext.Consumer>
			{({ setCurrentDragComponent }) => {
				return (
					<MainContainer>
						<MainScreen
							onClick={() => {
								if (!isRendered.current) {
									setCurrentDragComponent(null)
								}
								isRendered.current = false
							}}
						>
							{renderDragComponents((newDragComponent: DragComponent) => {
								isRendered.current = true
								setCurrentDragComponent(newDragComponent)
							})}
						</MainScreen>
					</MainContainer>
				)
			}}
		</DragComponentContext.Consumer>
	)
}

export default Main
