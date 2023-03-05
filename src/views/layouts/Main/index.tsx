import React from 'react'
import { MainContainer, MainScreen } from './styled'
import { DragComponentContext } from '../../../context/DragComponentContext'
import { DragComponent } from '../../../encapsulator'

interface MainProps {
	dragComponentTree: DragComponent[]
	children?: React.ReactNode
}

const Main: React.FC<MainProps> = ({ children, dragComponentTree }) => {
	//TODO: state来管理当前已渲染的元素。
	//渲染出组件的逻辑 嵌套
	const renderDragComponents = () => {
		const renderChildLoop = (dragComponent: DragComponent) => {
			if (dragComponent.children.value.length === 0) {
				return <dragComponent.RealNode key={dragComponent.key} />
			}

			return (
				<dragComponent.RealNode key={dragComponent.key}>
					{dragComponent.children.value.map((child) => {
						return <child.RealNode key={child.key} />
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
						<MainScreen onClick={() => setCurrentDragComponent(null)}>{renderDragComponents()}</MainScreen>
					</MainContainer>
				)
			}}
		</DragComponentContext.Consumer>
	)
}

Main.defaultProps = {
	children: null,
}

export default Main
