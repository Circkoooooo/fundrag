import styled from 'styled-components'
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
			<Left />
			<Main />
		</Background>
	)
}

export default App
