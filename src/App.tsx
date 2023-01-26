import { useState } from 'react'
import styled from 'styled-components'
import ElementSelection from './components/elements/ElementSelection'
import { ElementComponentType } from './components/elements/type'
import Left from './components/layouts/Left'
import Main from './components/layouts/Main'
import Right from './components/layouts/Right'

const Background = styled.div`
	width: 100%;
	height: 100%;
	background-color: #f0f0f0;
	display: flex;
`

function App() {
	const [renderedElements, setRenderedElements] = useState<
		ElementComponentType[]
	>([])

	const renderElement = (element: ElementComponentType) => {
		setRenderedElements([...renderedElements, element])
	}

	return (
		<Background>
			<Left>
				<ElementSelection
					pickElement={(element) => renderElement(element)}
				/>
			</Left>
			<Main renderedElements={renderedElements} />
			<Right />
		</Background>
	)
}

export default App
