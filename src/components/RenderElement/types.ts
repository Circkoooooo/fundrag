import { ReactNode } from 'react'
import { DefaultAppendProps, DefaultContainerProps, DragComponentType, ElementFunctionComponentType } from '../../elements/type'

export type RenderedPropsType<T extends DefaultAppendProps | DefaultContainerProps, P extends DragComponentType> = {
	readonly key: string
	Element: P extends 'inline' ? ElementFunctionComponentType<T, {}> : P extends 'container' ? ElementFunctionComponentType<T, { children?: ReactNode }> : never
}

//如果不是容器，则多一个containerKey的属性
export type RenderedElementsType<T extends DefaultAppendProps | DefaultContainerProps, P extends DragComponentType> = P extends 'container'
	? RenderedPropsType<T, P>
	: P extends 'inline'
	? RenderedPropsType<T, P> & { containerKey: string | null }
	: never
