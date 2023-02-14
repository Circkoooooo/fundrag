import { useEffect, useState } from 'react'
import styled from 'styled-components'
import elementBucket from './index'
import { chunkOutput, ElementFunctionComponentType } from './type'

const ElementSelectionContainer = styled.div`
	width: 100%;
`

const Selection = styled.div`
	padding: 10px;
`

const SelectionName = styled.div`
	font-weight: bold;
	margin-bottom: 10px;
`

const SelectionMain = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-gap: 10px;
`

interface ElementSelectionProps {
	pickElement?(element: ElementFunctionComponentType): void
}

const ElementDisplayAround = styled.div`
	padding: 10px;
	background-color: #f0f0f0;
	border-radius: 4px;
	cursor: pointer;
	transition: all ease-in-out 0.15s;
	white-space: nowrap;
	text-overflow: ellipsis;
	overflow: hidden;
`

/**
 * @description 将所有可以选择的组件渲染出来
 * @author onecirckoooooo
 * @date 2023/01/26 15:11
 */
const ElementSelection: React.FC<ElementSelectionProps> = ({ pickElement }) => {
	const [needRenderElements, setNeedRenderElements] = useState<chunkOutput[]>(
		[]
	)

	useEffect(() => {
		elementBucket.forEach((bucketItem) => {
			bucketItem.key = crypto.randomUUID()
		})
		setNeedRenderElements(
			elementBucket
				.filter((item) => item.elements.length !== 0) //筛选出含有子元素的容器元素
				.map((item) => {
					//给每一项element绑定unikey
					item.elements.forEach((element) => {
						element.defaultAppendProps.elementKey =
							crypto.randomUUID()
					})
					return item
				})
		)
	}, [])

	const renderGroupElements = () => {
		return needRenderElements.map((item) => {
			return (
				<Selection key={item.key}>
					<SelectionName>{item.name}</SelectionName>
					<SelectionMain>
						{item.elements.map((Element) => {
							return (
								<ElementDisplayAround
									key={Element.defaultAppendProps.elementKey}
									onClick={() =>
										pickElement && pickElement(Element)
									}
								>
									{Element.defaultAppendProps.componentName}
								</ElementDisplayAround>
							)
						})}
					</SelectionMain>
				</Selection>
			)
		})
	}

	return (
		<ElementSelectionContainer>
			{renderGroupElements()}
		</ElementSelectionContainer>
	)
}

export default ElementSelection
