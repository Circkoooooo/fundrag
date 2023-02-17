import { useState } from 'react'
import styled from 'styled-components'
import RenderElement from './components/RenderElement'
import { RenderedElementsType } from './components/RenderElement/types'
import ElementSelection from './elements/ElementSelection'
import { ClickEventAttributes, ClickEventElementType } from './elements/layout/types'
import { DefaultAppendProps, DefaultContainerProps, ElementFunctionComponentType } from './elements/type'
import Left from './layouts/Left'
import Main from './layouts/Main'
import Right, { ItemAttributes } from './layouts/Right'

const Background = styled.div`
	width: 100%;
	height: 100%;
	background-color: #f0f0f0;
	display: flex;
`

function App() {
	const [appendElements, setAppendElements] = useState<RenderedElementsType<DefaultAppendProps, 'inline'>[]>([])
	const [layoutElements, setLayoutElements] = useState<RenderedElementsType<DefaultContainerProps, 'container'>[]>([])
	const [itemAttributes, setItemAttributes] = useState<ItemAttributes[]>([] as ItemAttributes[])

	const [currentInfo, setCurrentInfo] = useState<{
		type: keyof ClickEventElementType
		key: string
	} | null>()

	const renderElement = (element: ElementFunctionComponentType<DefaultAppendProps | DefaultContainerProps>) => {
		const elementType = element.defaultAppendProps.componentType

		if (elementType === 'inline' && currentInfo?.type === 'layout' && currentInfo.key !== undefined) {
			const appendElement: RenderedElementsType<DefaultAppendProps, 'inline'> = {
				key: crypto.randomUUID(),
				Element: element,
				containerKey: currentInfo?.key, //寻找一个容器的key
			}
			setAppendElements([...appendElements, appendElement])
		} else if (elementType === 'container') {
			const layoutElement: RenderedElementsType<DefaultContainerProps, 'container'> = {
				key: crypto.randomUUID(),
				Element: element,
			}
			setLayoutElements([...layoutElements, layoutElement])
		}
	}

	const listenPickElement = (elementKey: string, clickEventsAttribute: ClickEventAttributes) => {
		setCurrentInfo({
			type: clickEventsAttribute.type,
			key: elementKey,
		})
		if (clickEventsAttribute.CSSAttributes !== undefined) {
			const items: ItemAttributes[] = Object.entries(clickEventsAttribute.CSSAttributes).map((item) => {
				return {
					key: crypto.randomUUID(),
					title: item[0],
					value: item[1] as string,
				}
			})
			setItemAttributes(items)
		}
	}

	return (
		<Background>
			<Left>
				<ElementSelection pickElement={(element) => renderElement(element)} />
			</Left>
			<Main>
				<RenderElement
					{...{ layoutElements, appendElements }}
					listenPickElementEvent={(key: string, clickEventAttributes: ClickEventAttributes) => listenPickElement(key, clickEventAttributes)}
				/>
			</Main>
			<Right itemAttributes={itemAttributes} />
		</Background>
	)
}

export default App
