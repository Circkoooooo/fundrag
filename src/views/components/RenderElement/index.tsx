import { DefaultAppendProps, DefaultContainerProps, ElementFunctionComponentType } from '../../elements/type'
import { RenderedElementsType } from './types'
import { ClickEventAttributes } from '../../elements/layout/types'

interface RenderElementProps {
	layoutElements: RenderedElementsType<DefaultContainerProps, 'container'>[]
	appendElements: RenderedElementsType<DefaultAppendProps, 'inline'>[]
	onPickElement: (key: string, clickEventAttributes: ClickEventAttributes) => any
}

export type RefsType = {
	renderElement(element: ElementFunctionComponentType<DefaultAppendProps | DefaultContainerProps>): void
}

const RenderElement: React.FC<RenderElementProps> = ({ layoutElements, appendElements, onPickElement }) => {
	return (
		<>
			{layoutElements.map(({ Element, key, styleProperties }) => {
				return (
					<Element
						{...{
							key,
							defaultStyleProperties: styleProperties,
						}}
						onClickEvent={(clickEventAttributes) => onPickElement && onPickElement(key, clickEventAttributes)}
					>
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
