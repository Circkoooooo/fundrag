import React from 'react'
import { MainContainer, MainScreen } from './styled'

interface MainProps {
	children?: JSX.Element | JSX.Element[] | null
}

const Main: React.FC<MainProps> = ({ children }) => {
	return (
		<MainContainer>
			<MainScreen>{children}</MainScreen>
		</MainContainer>
	)
}

Main.defaultProps = {
	children: null,
}

export default Main
