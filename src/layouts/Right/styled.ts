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
	cursor: pointer;
`

export const ElementKey = styled.div`
	padding: 10px;
	background-color: rgba(0, 0, 0, 0.15);
`

export const DataItemContainer = styled.div`
	width: 100%;
	margin: 8px 0 16px 0;
	padding: 0 8px;
`

export const DataItemTitle = styled.div`
	font-weight: bold;
	text-overflow: ellipsis;
	overflow: hidden;
`

export const DataItemEdit = styled.input`
	margin-top: 4px;
	width: 100%;
	outline: none;
	padding: 10px;
	border: 1px solid #000;
	border-radius: 4px;
`
