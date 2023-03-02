import React from 'react'
import { MainContainer, MainScreen } from './styled'
import { DragComponentContext } from '../../../context/DragComponentContext'

interface MainProps {
	children?: React.ReactNode
}

const Main: React.FC<MainProps> = ({ children }) => {
	return (
		<DragComponentContext.Consumer>
			{({ setCurrentDragComponent }) => {
				return (
					<MainContainer>
						<MainScreen onClick={() => setCurrentDragComponent(null)}>{children}</MainScreen>
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
