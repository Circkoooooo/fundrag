import React, { useState } from 'react'
import { BsChevronDoubleRight as MenuCollapseRight, BsChevronDoubleLeft as MenuCollapseLeft } from 'react-icons/bs'
import { SelectElement } from '../../../App'
import { PanelContainer } from '../sharedStyled'
import DataItem from './DataItem'
import { DataItemContainer, DataItemEdit, DataItemTitle, ElementKey, RightCollapseButton } from './styled'

export type ItemUnit = 'px' | '%' | ''

export type ItemAttributes = {
	key: string
	itemTitle: string
	itemValue: string
	itemUnit: ItemUnit
	preItemAttributes?: ItemAttributes[]
}

export type RightProps = {
	itemAttributes: ItemAttributes[]
	selectElement: SelectElement | null
	editValue: (
		event: React.FormEvent<HTMLInputElement>,
		itemObj: { itemTitle: string; itemValue: string; itemUnit: ItemUnit },
		preItemAttributes: ItemAttributes[],
		elementKey?: string,
		elementType?: 'container' | 'inline'
	) => void
}

const Right: React.FC<RightProps> = ({ itemAttributes, selectElement, editValue }) => {
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
			<>
				<ElementKey>容器key: {selectElement?.key}</ElementKey>
				{itemAttributes.map((item) => (
					<>
						<DataItem
							{...item}
							onEditValue={(event, itemObj, preItemAttributes) => editValue(event, itemObj, itemAttributes, selectElement?.key, selectElement?.type)}
							preItemAttributes={itemAttributes}
						/>
					</>
				))}
			</>
		</PanelContainer>
	)
}

export default Right
