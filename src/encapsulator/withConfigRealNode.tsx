import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { CreateDragComponentConfig, RealNodeType, WithConfig, WithConfigRealNodeType } from './index'

interface WithConfigRealNodeContainerType {
	isContainer: boolean
}

const WithConfigRealNode = styled.div<WithConfigRealNodeContainerType>`
	display: ${(props) => (props.isContainer ? 'block' : 'inline-block')};
`

const withConfigRealNode = (RealNode: RealNodeType, { isContainer }: CreateDragComponentConfig): WithConfigRealNodeType => {
	const component: React.FC<WithConfig> = ({ onSelectFn, children }) => {
		const [defaultStyle, setDefaultStyle] = useState<React.CSSProperties>({})

		useEffect(() => {
			if (isContainer) {
				setDefaultStyle({
					...defaultStyle,
					height: '200px',
					backgroundColor: 'red',
				})
			} else {
				setDefaultStyle({
					...defaultStyle,
					color: 'green',
				})
			}
		}, [])

		return (
			<WithConfigRealNode
				isContainer={isContainer}
				onClick={() => {
					onSelectFn && onSelectFn()
				}}
				style={defaultStyle}
			>
				<RealNode>{children}</RealNode>
			</WithConfigRealNode>
		)
	}
	return component
}

export default withConfigRealNode
