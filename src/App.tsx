import { ReactNode, useState } from 'react'
import styled from 'styled-components'
import ElementSelection from './elements/ElementSelection'
import {
	DefaultAppendProps,
	DefaultContainerProps,
	DragComponentType,
	ElementFunctionComponentType,
} from './elements/type'
import Left from './layouts/Left'
import Main from './layouts/Main'
import Right from './layouts/Right'

const Background = styled.div`
	width: 100%;
	height: 100%;
	background-color: #f0f0f0;
	display: flex;
`

/* TODO: 提取 渲染layout和append的逻辑 */

type RenderedPropsType<
	T extends DefaultAppendProps | DefaultContainerProps,
	P extends DragComponentType
> = {
	readonly key: string
	Element: P extends 'inline'
		? ElementFunctionComponentType<T, {}>
		: P extends 'container'
		? ElementFunctionComponentType<T, { children?: ReactNode }>
		: never
}

//如果不是容器，则多一个containerKey的属性
type RenderedElementsType<
	T extends DefaultAppendProps | DefaultContainerProps,
	P extends DragComponentType
> = P extends 'container'
	? RenderedPropsType<T, P>
	: P extends 'inline'
	? RenderedPropsType<T, P> & { containerKey: string | null }
	: never

function App() {
	const [appendElements, setAppendElements] = useState<
		RenderedElementsType<DefaultAppendProps, 'inline'>[]
	>([])

	const [layoutElements, setLayoutElements] = useState<
		RenderedElementsType<DefaultContainerProps, 'container'>[]
	>([])

	//点击一个元素，将其渲染
	const renderElement = (
		element: ElementFunctionComponentType<
			DefaultAppendProps | DefaultContainerProps
		>
	) => {
		const elementType = element.defaultAppendProps.componentType
		if (elementType === 'inline') {
			const appendElement: RenderedElementsType<
				DefaultAppendProps,
				'inline'
			> = {
				key: crypto.randomUUID(),
				Element: element,
				containerKey: 'tempKey', //寻找一个容器的key
			}
			setAppendElements([...appendElements, appendElement])
		} else {
			const layoutElement: RenderedElementsType<
				DefaultContainerProps,
				'container'
			> = {
				key: crypto.randomUUID(),
				Element: element,
			}
			setLayoutElements([...layoutElements, layoutElement])
		}
	}

	return (
		<Background>
			<Left>
				<ElementSelection
					pickElement={(element) => renderElement(element)}
				/>
			</Left>
			<Main>
				{/* TODO: 提取 渲染layout和append的逻辑 */}
				<>
					{layoutElements.map(({ Element, key }) => {
						return (
							<Element key={key}>
								{appendElements
									.filter((item) => item.containerKey === key)
									.map((child) => {
										return <child.Element key={child.key} />
									})}
							</Element>
						)
					})}
				</>
			</Main>
			<Right />
		</Background>
	)
}

export default App
