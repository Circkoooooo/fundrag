import { useState } from 'react'
import styled from 'styled-components'
import RenderElement from './views/components/RenderElement'
import { RenderedElementsType } from './views/components/RenderElement/types'
import ElementSelection from './views/elements/ElementSelection'
import { ClickEventAttributes, ClickEventElementType, StyleProperties } from './views/elements/layout/types'
import { DefaultAppendProps, DefaultContainerProps, ElementFunctionComponentType } from './views/elements/type'
import Left from './views/layouts/Left'
import Main from './views/layouts/Main'
import Right, { ItemAttributes, ItemUnit } from './views/layouts/Right'

const Background = styled.div`
	width: 100%;
	height: 100%;
	background-color: #f0f0f0;
	display: flex;
`

export type SelectElement = {
	type: ClickEventElementType
	key: string
}

function App() {
	const [appendElements, setAppendElements] = useState<RenderedElementsType<DefaultAppendProps, 'inline'>[]>([])
	const [layoutElements, setLayoutElements] = useState<RenderedElementsType<DefaultContainerProps, 'container'>[]>([])

	const [selectElement, setSelectElement] = useState<SelectElement | null>(null) //当前点击选中的元素
	const [itemAttributes, setItemAttributes] = useState<ItemAttributes[]>([] as ItemAttributes[]) //选中元素所有可修改属性的数组

	const renderElement = (element: ElementFunctionComponentType<DefaultAppendProps | DefaultContainerProps>) => {
		const elementType = element.defaultAppendProps.componentType

		if (elementType === 'inline' && selectElement && selectElement.type === 'container' && selectElement.key !== undefined) {
			const appendElement: RenderedElementsType<DefaultAppendProps, 'inline'> = {
				key: crypto.randomUUID(),
				Element: element,
				containerKey: selectElement?.key, //寻找一个容器的key
				styleProperties: {
					width: '200px',
					height: '200px',
					backgroundColor: 'blue',
				},
			}
			setItemAttributesByNewProperties(appendElement.styleProperties)
			setAppendElements([...appendElements, appendElement])
		} else if (elementType === 'container') {
			const layoutElement: RenderedElementsType<DefaultContainerProps, 'container'> = {
				key: crypto.randomUUID(),
				Element: element,
				styleProperties: {
					width: '100%',
					height: '200px',
					backgroundColor: 'blue',
				},
			}

			setItemAttributesByNewProperties(layoutElement.styleProperties)
			setLayoutElements([...layoutElements, layoutElement])
		}
	}

	// 响应每次修改属性事件
	const onEditValue = (
		event: React.FormEvent<HTMLInputElement>,
		preItemAttributes: ItemAttributes[],
		attrObj: {
			itemTitle: string
			itemValue: string
			itemUnit: string
		},
		elementKey?: string,
		elementType?: 'container' | 'inline'
	) => {
		const { itemTitle, itemUnit } = attrObj

		if (elementType === 'container') {
			const newLayoutElements = layoutElements.map((element) => {
				if (element.key === elementKey) {
					;(element.styleProperties as any)[itemTitle] = event.currentTarget.value + itemUnit
				}
				return element
			})

			setLayoutElements(newLayoutElements)
		}
	}

	const setItemAttributesByNewProperties = (styleProperties: StyleProperties) => {
		const items: ItemAttributes[] = Object.entries(styleProperties).map((item, index) => {
			const pureValue = (item[1] as string).match(/\d+/g) //不附带属性的值
			const pureUnit = (item[1] as string).match(/\D+/g) //属性的单位

			const itemTitle = item[0]
			const itemValue = pureValue === null ? ((item[1] as string) === null ? '0' : (item[1] as string)) : pureValue[0]
			const itemUnit: ItemUnit = pureUnit === null ? 'px' : pureValue === null ? '' : (pureUnit[0] as ItemUnit)

			return {
				key: index.toString(),
				itemTitle,
				itemValue,
				itemUnit,
			}
		})
		setItemAttributes(items)
	}

	// 响应点击渲染过的元素后的事件
	const pickElement = (elementKey: string, clickEventsAttribute: ClickEventAttributes) => {
		setSelectElement({
			type: clickEventsAttribute.type,
			key: elementKey,
		})
		if (clickEventsAttribute.styleProperties !== undefined) {
			setItemAttributesByNewProperties(clickEventsAttribute.styleProperties)
		}
	}

	return (
		<Background>
			<Left>
				<ElementSelection pickElement={(element) => renderElement(element)} />
			</Left>
			<Main>
				<RenderElement {...{ layoutElements, appendElements }} onPickElement={(key: string, clickEventAttributes: ClickEventAttributes) => pickElement(key, clickEventAttributes)} />
			</Main>
			<Right
				{...{ itemAttributes, selectElement }}
				editValue={(event, itemObj, preItemAttributes, elementKey, elementType) => onEditValue(event, preItemAttributes, itemObj, elementKey, elementType)}
			/>
		</Background>
	)
}

export default App
