import styled from 'styled-components'

export const RightCollapseButton = styled.div`
	--width: 30px;
	position: absolute;
	left: calc(0px - var(--width));
	top: 0;
	width: var(--width);
	height: var(--width);
	background-color: #fff;
	display: flex;
	justify-content: center;
	padding: 8px;
`
