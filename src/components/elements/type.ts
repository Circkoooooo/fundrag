/**
 * 元素组件的类型
 */
export type ElementComponentType = {
	componentName: string
}

/**
 * 每个元素块统一导出的对象类型
 */
export type chunkOutput = {
	name: string
	elements: ElementComponentType[]
}
