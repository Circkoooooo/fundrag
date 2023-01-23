import styled from 'styled-components'
import ElementSelection from './components/elements/ElementSelection'
import Left from './components/layouts/Left'
import Main from './components/layouts/Main'

const Background = styled.div`
	width: 100%;
	height: 100%;
	background-color: #f0f0f0;
	display: flex;
`

function App() {
	return (
		<Background>
			<Left>
				<ElementSelection />
			</Left>
			<Main />
		</Background>
	)
}

export default App
