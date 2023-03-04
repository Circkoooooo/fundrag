import React from 'react'
import styled from 'styled-components'
import { DragComponentPackage } from './index'
import { DragComponent } from '../../encapsulator'

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

interface ElementSelectionProps {
	onItemClick: (component: DragComponent) => void
	componentPackages: DragComponentPackage[]
}

/**
 * 将所有可以选择的组件渲染出来
 */
const ElementSelection: React.FC<ElementSelectionProps> = ({ onItemClick, componentPackages }) => {
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
											component && onItemClick(component)
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
}

export default ElementSelection
