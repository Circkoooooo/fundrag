import React from 'react'
import { CSSProperties } from 'styled-components'

export type DragComponentType = 'container' | 'inline' | never

export type DefaultBaseProps = {
	elementKey?: string //自动生成
	readonly componentName: string
	readonly componentType: DragComponentType
	defaultStyleProperties: LayoutBaseStyleProperties | InlineBaseStyleProperties
}
export type DefaultAppendProps = {} & DefaultBaseProps

export type DefaultContainerProps = {} & DefaultBaseProps

export type ElementFunctionComponentType<T extends DefaultAppendProps | DefaultContainerProps = DefaultAppendProps, P = {}> = { defaultAppendProps: T } & React.FC<P>

export type LayoutBaseStyleProperties = {
	width: CSSProperties['width']
	height: CSSProperties['height']
	backgroundColor: CSSProperties['backgroundColor']
}

export type InlineBaseStyleProperties = {
	width: CSSProperties['width']
	height: CSSProperties['height']
	backgroundColor: CSSProperties['backgroundColor']
}

/**
 * 每个元素块统一导出的对象类型
 */
export type chunkOutput = {
	name: string
	elements: ElementFunctionComponentType<any, any>[]
	key?: string
}
