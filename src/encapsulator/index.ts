import React from 'react'

type CreateDragComponentConfig = {
	isContainer?: boolean
	componentName: string
}

export type RealNodeType = React.ComponentType<any>

export type DragComponent = {
	RealNode: RealNodeType
	isContainer: boolean
	componentRenderConfig: {
		componentName: string
	}
	children: {
		value: DragComponent[]
		appendChild: (dragComponent: DragComponent) => void
	},
	key?:string
}

const childrenConfig = () => {
	const value: DragComponent[] = []
	const appendChild = (dragComponent: DragComponent) => value.push(dragComponent)
	return {
		value,
		appendChild,
	}
}

/**
 * 返回生成的一个DragComponent对象
 */
export function createDragComponent(RealNode: RealNodeType, config: CreateDragComponentConfig): DragComponent {
	const { isContainer, componentName } = config

	if (config.isContainer === undefined) {
		console.warn("has not assign a value to 'isContainer', it will be the default value: false")
	}
	return {
		RealNode,
		isContainer: isContainer as boolean,
		componentRenderConfig: {
			componentName,
		},
		children: childrenConfig(),
	}
}
