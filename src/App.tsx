import { useState } from 'react'
import styled from 'styled-components'
import Left from './components/layouts/Left'

const Background = styled.div`
	width: 100%;
	height: 100%;
	background-color: #f0f0f0;
`

function App() {
	const [isCollapse, setIsCollapse] = useState(false)

	return (
		<Background>
			<Left isCollapse={isCollapse} />
		</Background>
	)
}

export default App
