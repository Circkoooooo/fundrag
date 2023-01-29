import React from 'react'
import Text from '../../elements/common/Text/Text'
import Linear from '../../elements/layout/Linear'
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
				<Linear>123</Linear>
				{/* TODO: 实现元素嵌套的渲染逻辑。 */}
			</MainScreen>
		</MainContainer>
	)
}

Main.defaultProps = {
	renderedElements: [],
}

export default Main
