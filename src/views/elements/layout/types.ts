import { ReactNode } from 'react'
import { LayoutBaseStyleProperties } from '../type'

export type ClickEventElementType = 'container'

export type StyleProperties = {
	[key in keyof LayoutBaseStyleProperties]: LayoutBaseStyleProperties[key]
}
export type ClickEventAttributes = {
	type: ClickEventElementType
	styleProperties?: StyleProperties
}

/**
 * 布局元素共有的Props
 */
export interface LayoutBaseProps {
	children?: ReactNode
	onClickEvent?: (clickEventAttributes: ClickEventAttributes) => any
	defaultStyleProperties: LayoutBaseStyleProperties
}
