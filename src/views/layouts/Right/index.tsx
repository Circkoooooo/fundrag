import React, { useState } from 'react'
import { BsChevronDoubleRight as MenuCollapseRight, BsChevronDoubleLeft as MenuCollapseLeft } from 'react-icons/bs'
import { PanelContainer } from '../sharedStyled'
import { RightCollapseButton } from './styled'
import { DragComponentContext } from '../../../context/DragComponentContext'

export type ItemUnit = 'px' | '%' | ''

export type ItemAttributes = {
	key: string
	itemTitle: string
	itemValue: string
	itemUnit: ItemUnit
	preItemAttributes?: ItemAttributes[]
}

export type RightProps = {
	// itemAttributes: ItemAttributes[]
	// selectElement: SelectElement | null
	// editValue: (
	// 	event: React.FormEvent<HTMLInputElement>,
	// 	itemObj: { itemTitle: string; itemValue: string; itemUnit: ItemUnit },
	// 	preItemAttributes: ItemAttributes[],
	// 	elementKey?: string,
	// 	elementType?: 'container' | 'inline'
	// ) => void
}

const Right: React.FC<RightProps> = () => {
	const [isCollapse, setIsCollapse] = useState(false)

	return (
		<PanelContainer minWidth={0} defaultWidth={400} collapse={isCollapse}>
			<RightCollapseButton onClick={() => setIsCollapse(!isCollapse)}>
				{isCollapse ? (
					<MenuCollapseLeft
						style={{
							height: '100%',
							width: '100%',
						}}
					/>
				) : (
					<MenuCollapseRight
						style={{
							height: '100%',
							width: '100%',
						}}
					/>
				)}
			</RightCollapseButton>
			<DragComponentContext.Consumer>
				{({ currentDragComponent }) => {
					return (
						<>
							{currentDragComponent?.componentRenderConfig.componentName}
							{currentDragComponent?.key}
							{/*<ElementKey>容器key: {selectElement?.key}</ElementKey>*/}
							{/*{itemAttributes.map((item) => (*/}
							{/*	<DataItem*/}
							{/*		{...item}*/}
							{/*		onEditValue={(event, itemObj, preItemAttributes) => editValue(event, itemObj, itemAttributes, selectElement?.key, selectElement?.type)}*/}
							{/*		preItemAttributes={itemAttributes}*/}
							{/*	/>*/}
							{/*))}*/}
							{/*)*/}
						</>
					)
				}}
			</DragComponentContext.Consumer>
		</PanelContainer>
	)
}

export default Right
