import { ClickEventAttributes } from '../../elements/layout/types'
import { DefaultAppendProps, DefaultContainerProps, ElementFunctionComponentType } from '../../elements/type'
import { RenderedElementsType } from './types'

interface RenderElementProps {
	layoutElements: RenderedElementsType<DefaultContainerProps, 'container'>[]
	appendElements: RenderedElementsType<DefaultAppendProps, 'inline'>[]
	listenPickElementEvent: (key: string, clickEventAttributes: ClickEventAttributes) => any
}

export type RefsType = {
	renderElement(element: ElementFunctionComponentType<DefaultAppendProps | DefaultContainerProps>): void
}

const RenderElement: React.FC<RenderElementProps> = ({ layoutElements, appendElements, listenPickElementEvent }) => {
	return (
		<>
			{layoutElements.map(({ Element, key }) => {
				return (
					<Element key={key} onClickEvent={(clickEventAttributes) => listenPickElementEvent && listenPickElementEvent(key, clickEventAttributes)}>
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
