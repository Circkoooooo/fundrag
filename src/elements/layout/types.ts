import { ReactNode } from 'react'
import { CSSProperties } from 'styled-components'

export type ClickEventElementType = {
	layout: 'layout'
}

export type ClickEventAttributes = {
	type: ClickEventElementType['layout']
	CSSAttributes?: {
		[key in keyof LayoutBaseCSSProperties]: LayoutBaseCSSProperties[key]
	}
}

/**
 * 布局元素共有的Props
 */
export interface LayoutBaseProps {
	children?: ReactNode
	onClickEvent?: (clickEventAttributes: ClickEventAttributes) => any
}

export interface LayoutBaseCSSProperties {
	width: CSSProperties['width']
	height: CSSProperties['height']
	backgroundColor: CSSProperties['backgroundColor']
}
