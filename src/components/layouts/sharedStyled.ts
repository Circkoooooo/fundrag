import styled from 'styled-components'

interface LeftPanelProps {
	collapse?: boolean
	defaultWidth?: number
	minWidth?: number
}

/**
 * 面板布局容器。高度固定百分百，宽度自定义可伸缩
 *
 * defaultWidth: 正常情况下的宽度。默认为400px
 * minWidht: collapse为true时的宽度。默认为0px
 * collapse: undefined或者为false 的时候返回宽度defaultWidth，否则返回minWidth
 */
export const PanelContainer = styled.div<LeftPanelProps>`
	width: ${(props) => {
		const { collapse, defaultWidth, minWidth } = props
		let width: number = 400
		const defaultMinWith = 0
		if (collapse) {
			width = minWidth === undefined ? defaultMinWith : minWidth
		} else {
			width = defaultWidth === undefined ? width : defaultWidth
		}
		return `${width}px`
	}};
	height: 100%;
	background-color: #ffffff;
	transition: all ease-in-out 0.15s;
	box-shadow: 10px 0 20px rgba(0, 0, 0, 0.08);
	z-index: 1;
`
