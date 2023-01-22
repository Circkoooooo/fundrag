import styled from 'styled-components'

const WIDTH = ['100px', '400px']

interface LeftPanelProps {
	collapse: boolean
}

/**
 * 左面板容器
 */
export const LeftPanel = styled.div<LeftPanelProps>`
	width: ${(props) => (props.collapse ? WIDTH[0] : WIDTH[1])};
	height: 100%;
	background-color: #ffffff;
	transition: all ease-in-out 0.15s;
	box-shadow: 10px 0 20px rgba(0, 0, 0, 0.08);
	z-index: 1;
`
/**
 * 顶部区域
 */
export const HeaderMenu = styled.div`
	box-sizing: content-box;
	width: 100%;
	height: 40px;
	border-bottom: 2px solid rgba(0, 0, 0, 0.05);
`

/**
 * 折叠按钮
 */
export const CollapseButton = styled.div`
	width: 40px;
	height: 100%;
	margin-left: auto;
	cursor: pointer;
	user-select: none;
	padding: 8px;
`
