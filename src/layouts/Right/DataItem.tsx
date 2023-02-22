import React from 'react'
import styled from 'styled-components'
import { ItemAttributes } from '.'

/**
 * in
 * 1. DataItem 组件的key和每一个组件的标题属性和单位
 *
 * out
 * 2. 修改属性后回调调用对应key的组件的样式
 *
 */

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

const DataItem: React.FC<DataItemProps> = ({ itemTitle, itemValue, itemUnit, editValue }) => {
	return (
		<DataItemContainer>
			<DataItemitemTitle>{itemTitle === undefined ? '未命名' : `${itemTitle} ${itemUnit ? `[${itemUnit}]` : ''}`}</DataItemitemTitle>
			<DataItemEdit defaultValue={itemValue === undefined ? '空' : itemValue} onInput={(event) => editValue(event)} />
		</DataItemContainer>
	)
}

export default DataItem
