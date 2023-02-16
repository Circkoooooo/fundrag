import { DefaultAppendProps, DefaultContainerProps, ElementFunctionComponentType } from '../../elements/type'
import { RenderedElementsType } from './types'

interface RenderElementProps {
	layoutElements: RenderedElementsType<DefaultContainerProps, 'container'>[]
	appendElements: RenderedElementsType<DefaultAppendProps, 'inline'>[]
}

export type RefsType = {
	renderElement(element: ElementFunctionComponentType<DefaultAppendProps | DefaultContainerProps>): void
}

const RenderElement: React.FC<RenderElementProps> = ({ layoutElements, appendElements }) => {
	return (
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
	)
}

export default RenderElement
