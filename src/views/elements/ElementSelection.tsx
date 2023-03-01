import styled from 'styled-components'
import { componentPackages } from './index'
import { DragComponentContext } from '../../context/DragComponentContext'

const Selection = styled.div`
	padding: 10px;
`

const SelectionName = styled.div`
	font-weight: bold;
	margin-bottom: 10px;
`

const SelectionMain = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-gap: 10px;
`

const ElementDisplayAround = styled.div`
	padding: 10px;
	background-color: #f0f0f0;
	border-radius: 4px;
	cursor: pointer;
	transition: all ease-in-out 0.15s;
	white-space: nowrap;
	text-overflow: ellipsis;
	overflow: hidden;
`

/**
 * 将所有可以选择的组件渲染出来
 */
const ElementSelection = () => {
	return (
		<DragComponentContext.Consumer>
			{({ setCurrentDragComponent }) => {
				return (
					<>
						{componentPackages.map((componentPkg) => {
							return (
								<Selection key={componentPkg.packageName.toString()}>
									<SelectionName>{componentPkg.packageName}</SelectionName>
									<SelectionMain>
										{componentPkg.components.map((component) => {
											return (
												<ElementDisplayAround
													key={component.componentRenderConfig.componentName.toString()}
													onClick={() => {
														component && setCurrentDragComponent(component)
													}}
												>
													{component.componentRenderConfig.componentName}
												</ElementDisplayAround>
											)
										})}
									</SelectionMain>
								</Selection>
							)
						})}
					</>
				)
			}}
		</DragComponentContext.Consumer>
	)
}

export default ElementSelection
