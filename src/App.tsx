import { useState } from 'react'
import styled from 'styled-components'
import RenderElement from './components/RenderElement'
import { RenderedElementsType } from './components/RenderElement/types'
import ElementSelection from './elements/ElementSelection'
import { DefaultAppendProps, DefaultContainerProps, ElementFunctionComponentType } from './elements/type'
import Left from './layouts/Left'
import Main from './layouts/Main'
import Right from './layouts/Right'

const Background = styled.div`
	width: 100%;
	height: 100%;
	background-color: #f0f0f0;
	display: flex;
`

function App() {
	const [appendElements, setAppendElements] = useState<RenderedElementsType<DefaultAppendProps, 'inline'>[]>([])

	const [layoutElements, setLayoutElements] = useState<RenderedElementsType<DefaultContainerProps, 'container'>[]>([])

	const renderElement = (element: ElementFunctionComponentType<DefaultAppendProps | DefaultContainerProps>) => {
		const elementType = element.defaultAppendProps.componentType
		if (elementType === 'inline') {
			const appendElement: RenderedElementsType<DefaultAppendProps, 'inline'> = {
				key: crypto.randomUUID(),
				Element: element,
				containerKey: 'tempKey', //寻找一个容器的key
			}
			setAppendElements([...appendElements, appendElement])
		} else {
			const layoutElement: RenderedElementsType<DefaultContainerProps, 'container'> = {
				key: crypto.randomUUID(),
				Element: element,
			}
			setLayoutElements([...layoutElements, layoutElement])
		}
	}

	return (
		<Background>
			<Left>
				<ElementSelection pickElement={(element) => renderElement(element)} />
			</Left>
			<Main>
				<RenderElement {...{ layoutElements, appendElements }} />
			</Main>
			<Right />
		</Background>
	)
}

export default App
