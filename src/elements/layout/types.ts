import { ReactNode } from 'react'
import { LayoutBaseStyleProperties } from '../type'

export type ClickEventElementType = {
	layout: 'layout'
}

export type ClickEventAttributes = {
	type: ClickEventElementType['layout']
	styleProperties?: {
		[key in keyof LayoutBaseStyleProperties]: LayoutBaseStyleProperties[key]
	}
}

/**
 * 布局元素共有的Props
 */
export interface LayoutBaseProps {
	children?: ReactNode
	onClickEvent?: (clickEventAttributes: ClickEventAttributes) => any
	styleProperties: LayoutBaseStyleProperties
}
