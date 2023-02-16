import styled from 'styled-components'

/**
 * 顶部区域
 */
export const HeaderMenu = styled.div`
	--width: 30px;
	box-sizing: content-box;
	width: 100%;
	height: var(--width + 2);
	border-bottom: 2px solid rgba(0, 0, 0, 0.05);
`

/**
 * 折叠按钮
 */
export const LeftCollapseButton = styled.div`
	width: var(--width);
	height: 100%;
	margin-left: auto;
	cursor: pointer;
	user-select: none;
	padding: 8px;
`
