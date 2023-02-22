import React, { useState } from 'react'
import { BsChevronDoubleRight as MenuCollapseRight, BsChevronDoubleLeft as MenuCollapseLeft } from 'react-icons/bs'
import { SelectElement } from '../../App'
import { PanelContainer } from '../sharedStyled'
import DataItem from './DataItem'
import { ElementKey, RightCollapseButton } from './styled'

export type ItemAttributes = {
	key: string
	itemTitle: string
	itemValue: string
	itemUnit: string
	editValue: (event: React.FormEvent<HTMLInputElement>) => void
}

export type RightProps = {
	itemAttributes: ItemAttributes[]
	selectElement: SelectElement | null
}

const Right: React.FC<RightProps> = ({ itemAttributes, selectElement }) => {
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
					<DataItem {...item} />
				))}
			</>
		</PanelContainer>
	)
}

export default Right
