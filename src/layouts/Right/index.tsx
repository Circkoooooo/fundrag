import React, { useState } from 'react'
import { BsChevronDoubleRight as MenuCollapseRight, BsChevronDoubleLeft as MenuCollapseLeft } from 'react-icons/bs'
import { PanelContainer } from '../sharedStyled'
import DataItem from './DataItem'
import { RightCollapseButton } from './styled'

export type ItemAttributes = {
	key: string
	title: string
	value: string
}

export type RightProps = {
	itemAttributes: ItemAttributes[]
}

const Right: React.FC<RightProps> = ({ itemAttributes }) => {
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
				{itemAttributes.map((item) => (
					<DataItem {...item} />
				))}
			</>
		</PanelContainer>
	)
}

export default Right
