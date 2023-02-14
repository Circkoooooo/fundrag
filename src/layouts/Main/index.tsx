import React from 'react'
import { MainContainer, MainScreen } from './styled'

interface MainProps {
	children: JSX.Element | JSX.Element[]
}

const Main: React.FC<MainProps> = ({ children }) => {
	return (
		<MainContainer>
			<MainScreen>{children}</MainScreen>
		</MainContainer>
	)
}

export default Main
