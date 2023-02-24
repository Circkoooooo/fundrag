import { useState } from 'react'
import styled from 'styled-components'
import RenderElement from './components/RenderElement'
import { RenderedElementsType } from './components/RenderElement/types'
import ElementSelection from './elements/ElementSelection'
import { ClickEventAttributes, ClickEventElementType } from './elements/layout/types'
import { DefaultAppendProps, DefaultContainerProps, ElementFunctionComponentType } from './elements/type'
import Left from './layouts/Left'
import Main from './layouts/Main'
import Right, { ItemAttributes, ItemUnit } from './layouts/Right'

const Background = styled.div`
	width: 100%;
	height: 100%;
	background-color: #f0f0f0;
	display: flex;
`

export type SelectElement = {
	type: keyof ClickEventElementType
	key: string
}

function App() {
	const [appendElements, setAppendElements] = useState<RenderedElementsType<DefaultAppendProps, 'inline'>[]>([])
	const [layoutElements, setLayoutElements] = useState<RenderedElementsType<DefaultContainerProps, 'container'>[]>([])

	const [selectElement, setSelectElement] = useState<SelectElement | null>(null) //当前点击选中的元素
	const [itemAttributes, setItemAttributes] = useState<ItemAttributes[]>([] as ItemAttributes[]) //选中元素所有可修改属性的数组

	const renderElement = (element: ElementFunctionComponentType<DefaultAppendProps | DefaultContainerProps>) => {
		const elementType = element.defaultAppendProps.componentType

		if (elementType === 'inline' && selectElement?.type === 'layout' && selectElement.key !== undefined) {
			const appendElement: RenderedElementsType<DefaultAppendProps, 'inline'> = {
				key: crypto.randomUUID(),
				Element: element,
				containerKey: selectElement?.key, //寻找一个容器的key
				styleProperties: element.defaultAppendProps.defaultStyleProperties,
			}
			setAppendElements([...appendElements, appendElement])
		} else if (elementType === 'container') {
			console.log(element.defaultAppendProps)
			const layoutElement: RenderedElementsType<DefaultContainerProps, 'container'> = {
				key: crypto.randomUUID(),
				Element: element,
				styleProperties: element.defaultAppendProps.defaultStyleProperties,
			}
			setLayoutElements([...layoutElements, layoutElement])
		}
	}

	// 响应每次修改属性事件
	const onEditValue = (
		elementKey: string,
		type: 'container' | 'inline',
		attrObj: {
			itemTitle: string
			itemValue: string
			itemUnit: string
		},
		event: React.FormEvent<HTMLInputElement>,
		preItemAttributes?: ItemAttributes[]
	) => {
		const { itemTitle, itemUnit } = attrObj
		if (type === 'container') {
			const newLayoutElements = layoutElements.map((element) => {
				if (element.key === elementKey) {
					;(element.styleProperties as any)[itemTitle] = event.currentTarget.value + itemUnit
				}
				return element
			})

			if (preItemAttributes) {
				setItemAttributes(preItemAttributes)
			}
			setLayoutElements(newLayoutElements)
		}
	}

	/**
	 * 响应点击渲染过的元素后的事件
	 *
	 */
	const onPickElement = (elementKey: string, type: 'container' | 'inline', clickEventsAttribute: ClickEventAttributes) => {
		setSelectElement({
			type: clickEventsAttribute.type,
			key: elementKey,
		})

		if (clickEventsAttribute.styleProperties !== undefined) {
			const items: ItemAttributes[] = Object.entries(clickEventsAttribute.styleProperties).map((item, index) => {
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
					editValue: (event: React.FormEvent<HTMLInputElement>, preItemAttributes?: ItemAttributes[]) => {
						onEditValue(
							elementKey,
							type,
							{
								itemTitle: item[0],
								itemValue,
								itemUnit,
							},
							event,
							preItemAttributes
						)
					},
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
					onPickElement={(key: string, type: 'container' | 'inline', clickEventAttributes: ClickEventAttributes) => onPickElement(key, type, clickEventAttributes)}
				/>
			</Main>
			<Right {...{ itemAttributes, selectElement }} />
		</Background>
	)
}

export default App
