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

	//TODO: 在这里调用每个容器中修改对应样式的函数
	/**
	 * 响应每次修改属性事件
	 *
	 * @param key 元素的key
	 * @param itemTitle
	 * @param itemValue
	 * @param event
	 */
	const onEditValue = (
		elementKey: string,
		attrObj: {
			itemTitle: string
			itemValue: string
			itemUnit: string
		},
		event: React.FormEvent<HTMLInputElement>
	) => {
		const { itemTitle, itemValue, itemUnit } = attrObj

		console.log({
			elementKey,
			itemTitle,
			itemValue,
			itemUnit,
			target: event.currentTarget,
		})
	}

	/**
	 * 响应点击渲染过的元素后的事件
	 *
	 */
	const onPickElement = (elementKey: string, clickEventsAttribute: ClickEventAttributes) => {
		setSelectElement({
			type: clickEventsAttribute.type,
			key: elementKey,
		})

		if (clickEventsAttribute.CSSAttributes !== undefined) {
			const items: ItemAttributes[] = Object.entries(clickEventsAttribute.CSSAttributes).map((item, index) => {
				const pureValue = (item[1] as string).match(/\d+/g) //不附带属性的值
				const pureUnit = (item[1] as string).match(/\D+/g) //属性的单位

				const itemTitle = item[0]
				const itemValue = pureValue === null ? ((item[1] as string) === null ? '0' : (item[1] as string)) : pureValue[0]
				const itemUnit = pureUnit === null ? 'px' : pureValue === null ? '' : pureUnit[0]

				return {
					key: index.toString(),
					itemTitle,
					itemValue,
					itemUnit,
					editValue: (event: React.FormEvent<HTMLInputElement>) =>
						onEditValue(
							elementKey,
							{
								itemTitle: item[0],
								itemValue,
								itemUnit,
							},
							event
						),
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
				<RenderElement {...{ layoutElements, appendElements }} onPickElement={(key: string, clickEventAttributes: ClickEventAttributes) => onPickElement(key, clickEventAttributes)} />
			</Main>
			<Right {...{ itemAttributes, selectElement }} />
		</Background>
	)
}

export default App
