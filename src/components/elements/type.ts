import React from 'react'

/**
 * 元素组件的附加类型
 */
export type ElementFunctionComponentType<P = {}> = {
	componentName: string
	elementKey?: string
} & React.FC<P>

/**
 * 每个元素块统一导出的对象类型
 */
export type chunkOutput = {
	name: string
	elements: ElementFunctionComponentType<any>[]
	key?: string
}
