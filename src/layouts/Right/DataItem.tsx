import styled from 'styled-components'

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

interface DataItemProps {
	title?: string
	value?: string
}

const DataItem: React.FC<DataItemProps> = ({ title, value }) => {
	return (
		<DataItemContainer>
			<DataItemTitle>{title === undefined ? '未命名' : title}</DataItemTitle>
			<DataItemEdit defaultValue={value === undefined ? '空' : value} />
		</DataItemContainer>
	)
}

export default DataItem
