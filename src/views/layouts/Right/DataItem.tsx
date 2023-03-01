import React, { useState } from 'react'
import { ItemAttributes, ItemUnit } from '.'
import { DataItemContainer, DataItemEdit, DataItemTitle } from './styled'

type DataItemProps = ItemAttributes & {
	onEditValue: (event: React.FormEvent<HTMLInputElement>, itemObj: { itemTitle: string; itemValue: string; itemUnit: ItemUnit }, preItemAttributes?: ItemAttributes[]) => void
}

const DataItem: React.FC<DataItemProps> = ({ itemTitle, itemValue, itemUnit, onEditValue, preItemAttributes }) => {
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

			onEditValue(
				event,
				{
					itemTitle,
					itemValue,
					itemUnit,
				},
				preItemAttributes
			)
		}
	}

	return (
		<DataItemContainer>
			<DataItemTitle>{itemTitle === undefined ? '未命名' : `${itemTitle} ${itemUnit ? `[${itemUnit}]` : ''}`}</DataItemTitle>
			<DataItemEdit value={itemValue === undefined ? '空' : itemValue} onChange={(event) => preEditValue(event)} />
		</DataItemContainer>
	)
}

export default DataItem
