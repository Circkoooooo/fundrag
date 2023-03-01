import styled from 'styled-components'
import { useRef, useState } from 'react'
import { buildBaseProps } from '../..'
import { DefaultContainerProps, ElementFunctionComponentType, LayoutBaseStyleProperties } from '../../type'
import { LayoutBaseProps } from '../types'

const LinearContainer = styled.div<LayoutBaseStyleProperties>`
	${(props) => {
		return {
			width: props.width,
			height: props.height,
			backgroundColor: props.backgroundColor,
		}
	}}
`

type LinearProps = LayoutBaseProps & {}

const Linear: ElementFunctionComponentType<DefaultContainerProps, LinearProps> = ({ children, onClickEvent, defaultStyleProperties }) => {
	const styleProperties = useRef(defaultStyleProperties)

	return (
		<LinearContainer
			{...styleProperties.current}
			onClick={() => {
				onClickEvent &&
					onClickEvent({
						type: 'container',
						styleProperties: styleProperties.current,
					})
			}}
		>
			{children}
		</LinearContainer>
	)
}

Linear.defaultAppendProps = buildBaseProps('container', '线性组件')

export default Linear
