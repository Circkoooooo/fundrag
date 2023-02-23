import React from 'react'
import styled from 'styled-components'
import { ItemAttributes } from '.'

const DataItemContainer = styled.div`
	width: 100%;
	margin: 8px 0 16px 0;
	padding: 0 8px;
`

const DataItemitemTitle = styled.div`
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
	const preEditValue = (event: React.FormEvent<HTMLInputElement>) => {
		preItemAttributes?.map((attr) => {
			//update value
			if (itemTitle === attr.itemTitle) {
				attr.itemValue = event.currentTarget.value
			}
			return attr
		})
		editValue(event, preItemAttributes)
	}

	return (
		<DataItemContainer>
			<DataItemitemTitle>{itemTitle === undefined ? '未命名' : `${itemTitle} ${itemUnit ? `[${itemUnit}]` : ''}`}</DataItemitemTitle>
			<DataItemEdit defaultValue={itemValue === undefined ? '空' : itemValue} onInput={(event) => preEditValue(event)} />
		</DataItemContainer>
	)
}

export default DataItem
