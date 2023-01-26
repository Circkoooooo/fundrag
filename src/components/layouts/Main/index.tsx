import React from 'react'
import { ElementComponentType } from '../../elements/type'
import { MainContainer, MainScreen } from './styled'

interface MainProps {
	renderedElements?: ElementComponentType[]
}
const Main: React.FC<MainProps> = ({ renderedElements }) => {
	return (
		<MainContainer>
			<MainScreen>
				{renderedElements?.map((RenderedElement) => {
					return <RenderedElement key={crypto.randomUUID()} />
				})}
			</MainScreen>
		</MainContainer>
	)
}

Main.defaultProps = {
	renderedElements: [],
}

export default Main
