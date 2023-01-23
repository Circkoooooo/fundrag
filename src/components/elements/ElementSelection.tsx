import styled from 'styled-components'
import elementBucket from './index'

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

const ElementSelection = () => {
	const renderGroupElements = () => {
		return elementBucket
			.filter((item) => item.elements.length !== 0)
			.map((item) => {
				return (
					<Selection key={crypto.randomUUID()}>
						<SelectionName>{item.name}</SelectionName>
						<SelectionMain>
							{item.elements.map((Element) => {
								return (
									<ElementDisplayAround
										key={crypto.randomUUID()}
									>
										{Element.displayName}
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
