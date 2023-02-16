import { useState } from 'react'
import { BsChevronDoubleRight as MenuCollapseRight, BsChevronDoubleLeft as MenuCollapseLeft } from 'react-icons/bs'
import { PanelContainer } from '../sharedStyled'
import { RightCollapseButton } from './styled'

const Right = () => {
	const [isCollapse, setIsCollapse] = useState(true)

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
		</PanelContainer>
	)
}

export default Right
