import styled from 'styled-components'

const WIDTH = ['400px', '100px']

interface LeftPanelProps {
	collapse: boolean
}

export const LeftPanel = styled.div<LeftPanelProps>`
	width: ${(props) => (props.collapse ? WIDTH[0] : WIDTH[1])};
	height: 100%;
	background-color: #ffffff;
	transition: all ease-in-out 0.15s;
`
