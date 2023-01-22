import React, { useState } from 'react'
import {
	BsChevronDoubleRight as MenuCollapseRight,
	BsChevronDoubleLeft as MenuCollapseLeft,
} from 'react-icons/bs'
import { CollapseButton, HeaderMenu, LeftPanel } from './styled'

interface LeftProps {}

const Left: React.FC<LeftProps> = () => {
	const [isCollapse, setIsCollapse] = useState(true)

	return (
		<LeftPanel collapse={isCollapse}>
			<HeaderMenu>
				<CollapseButton onClick={() => setIsCollapse(!isCollapse)}>
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
				</CollapseButton>
			</HeaderMenu>
		</LeftPanel>
	)
}

export default Left
