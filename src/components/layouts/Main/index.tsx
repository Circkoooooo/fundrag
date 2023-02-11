import React from 'react'
import { ElementFunctionComponentType } from '../../elements/type'
import { MainContainer, MainScreen } from './styled'

interface MainProps {
	renderedElements?: ElementFunctionComponentType[]
}

const Main: React.FC<MainProps> = ({ renderedElements }) => {
	return (
		<MainContainer>
			<MainScreen>
				{renderedElements?.map((RenderedElement) => {
					return <RenderedElement key={crypto.randomUUID()} />
				})}
				{/* TODO: 实现元素嵌套的渲染逻辑。 */}
			</MainScreen>
		</MainContainer>
	)
}

Main.defaultProps = {
	renderedElements: [],
}

export default Main
