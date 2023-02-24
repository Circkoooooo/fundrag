import React, { useState } from 'react'
import styled from 'styled-components'
import { ItemAttributes, ItemUnit } from '.'

const DataItemContainer = styled.div`
	width: 100%;
	margin: 8px 0 16px 0;
	padding: 0 8px;
`

const DataItemTitle = styled.div`
	font-weight: bold;
	text-overflow: ellipsis;
	overflow: hidden;
`

const DataItemEdit = styled.input`
	margin-top: 4px;
	width: 100%;
	outline: none;
	padding: 10px;
	border: 1px solid #000;
	border-radius: 4px;
`

type DataItemProps = ItemAttributes

const DataItem: React.FC<DataItemProps> = ({ itemTitle, itemValue, itemUnit, editValue, preItemAttributes }) => {
	const [currentItemValue, setCurrentItemValue] = useState(itemValue)
	const validateForUnit = (preValue: string, newValue: string, unit: ItemUnit) => {
		//是否应该是纯数字字符串
		let shouldPureNumberString = false
		if (unit === '%' || unit === 'px') shouldPureNumberString = true

		//输入值是否包含非数字
		const testIncludeNonOfNumber = /\D/g.test(newValue)
		return shouldPureNumberString && !testIncludeNonOfNumber
	}

	const preEditValue = (event: React.FormEvent<HTMLInputElement>) => {
		const target = event.currentTarget
		const isValidate = validateForUnit(itemValue, target.value, itemUnit)

		//没有通过校验，重置input的值
		if (!isValidate) {
			setCurrentItemValue(itemValue)
		} else {
			setCurrentItemValue(target.value)
			preItemAttributes?.map((attr) => {
				//update value
				if (itemTitle === attr.itemTitle) {
					attr.itemValue = event.currentTarget.value
				}
				return attr
			})
			editValue(event, preItemAttributes)
		}
	}

	return (
		<DataItemContainer>
			<DataItemTitle>{itemTitle === undefined ? '未命名' : `${itemTitle} ${itemUnit ? `[${itemUnit}]` : ''}`}</DataItemTitle>
			<DataItemEdit value={currentItemValue === undefined ? '空' : currentItemValue} onChange={(event) => preEditValue(event)} />
		</DataItemContainer>
	)
}

export default DataItem
