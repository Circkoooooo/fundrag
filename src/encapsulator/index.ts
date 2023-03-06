import React from 'react'
import withConfigRealNode from './withConfigRealNode'

export type CreateDragComponentConfig = {
	isContainer: boolean
	componentName: string
}

export type RealNodeType = React.ComponentType<any>

export type WithConfig = {
	onSelectFn: () => void
	children?: React.ReactNode
}

export type WithConfigRealNodeType = React.ComponentType<
	{
		key?: string
		children?: React.ReactNode
	} & WithConfig
>

export type DragComponent = {
	RealNode: WithConfigRealNodeType
	isContainer: boolean
	componentRenderConfig: {
		componentName: string
	}
	children: {
		value: DragComponent[]
		appendChild: (dragComponent: DragComponent) => void
	}
	key?: string
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
export function createDragComponent(__RealNode: RealNodeType, config: CreateDragComponentConfig): DragComponent {
	if (config.isContainer === undefined) {
		console.warn("has not assign a value to 'isContainer', it will be the default value: false")
	}

	const isContainer: boolean = config.isContainer as boolean
	const componentRenderConfig = {
		componentName: config.componentName,
	}
	const RealNode = withConfigRealNode(__RealNode, config)
	const children = childrenConfig()

	return {
		RealNode,
		isContainer,
		componentRenderConfig,
		children,
	}
}

export function cloneDragComponent(dragComponentFunctionComponent: DragComponent, key: string): DragComponent {
	const { RealNode, isContainer } = dragComponentFunctionComponent

	const DragComponentClone = createDragComponent(RealNode, {
		isContainer,
		componentName: dragComponentFunctionComponent.componentRenderConfig.componentName,
	})
	DragComponentClone.key = key
	return DragComponentClone
}
