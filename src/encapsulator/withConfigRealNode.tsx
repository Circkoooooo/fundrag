import React from 'react'
import styled from 'styled-components'
import { CreateDragComponentConfig, RealNodeType, WithConfig, WithConfigRealNodeType } from './index'

interface WithConfigRealNodeContainerType {
	isContainer: boolean
}

const WithConfigRealNode = styled.div<WithConfigRealNodeContainerType>`
	display: ${(props) => (props.isContainer ? 'block' : 'inline-block')};
`

const withConfigRealNode = (RealNode: RealNodeType, { isContainer, componentName }: CreateDragComponentConfig): WithConfigRealNodeType => {
	const component: React.FC<WithConfig> = ({ onSelectFn, children }) => (
		<WithConfigRealNode
			isContainer={isContainer}
			onClick={() => {
				onSelectFn && onSelectFn()
			}}
		>
			<RealNode>{children}</RealNode>
		</WithConfigRealNode>
	)
	return component
}

export default withConfigRealNode
