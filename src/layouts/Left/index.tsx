import React, { ReactNode, useState } from 'react'
import { BsChevronDoubleRight as MenuCollapseRight, BsChevronDoubleLeft as MenuCollapseLeft } from 'react-icons/bs'
import { PanelContainer } from '../sharedStyled'
import { HeaderMenu, LeftCollapseButton } from './styled'

interface LeftProps {
	children: ReactNode
}

const Left: React.FC<LeftProps> = ({ children }) => {
	const [isCollapse, setIsCollapse] = useState(true)

	return (
		<PanelContainer collapse={isCollapse} defaultWidth={400} minWidth={100}>
			<HeaderMenu>
				<LeftCollapseButton onClick={() => setIsCollapse(!isCollapse)}>
					{isCollapse ? (
						<MenuCollapseRight
							style={{
								width: '100%',
								height: '100%',
							}}
						/>
					) : (
						<MenuCollapseLeft
							style={{
								width: '100%',
								height: '100%',
							}}
						/>
					)}
				</LeftCollapseButton>
			</HeaderMenu>
			{children}
		</PanelContainer>
	)
}

export default Left
