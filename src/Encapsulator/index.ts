import React from 'react'

type CreateDragComponentConfig = {
	isContainer?: boolean
	componentName: string
}

export type RealNode = React.ComponentType<any>

export type DragComponent = {
	realNode: RealNode
	isContainer: boolean
	componentRenderConfig: {
		componentName: string
	}
	children: {
		value: DragComponent[]
		appendChild: (dragComponent: DragComponent) => void
	}
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
export function createDragComponent(realNode: RealNode, config: CreateDragComponentConfig): DragComponent {
	const { isContainer, componentName } = config

	if (config.isContainer) {
		console.warn("has not assign a value to 'isContainer', it will be the default value: false")
	}

	return {
		realNode,
		isContainer: isContainer as boolean,
		componentRenderConfig: {
			componentName,
		},
		children: childrenConfig(),
	}
}
