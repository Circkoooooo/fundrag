import { useState } from 'react'
import styled from 'styled-components'
import { buildBaseProps } from '../..'
import { DefaultContainerProps, ElementFunctionComponentType } from '../../type'
import { LayoutBaseCSSProperties, LayoutBaseProps } from '../types'

const LinearContainer = styled.div<LayoutBaseCSSProperties>`
	${(props) => {
		return {
			width: props.width,
			height: props.height,
			backgroundColor: props.backgroundColor,
		}
	}}
`

type LinearProps = LayoutBaseProps & {}

const Linear: ElementFunctionComponentType<DefaultContainerProps, LinearProps> = ({ children, onClickEvent }) => {
	const [defaultCSSOption, setDefaultCSSOption] = useState<LayoutBaseCSSProperties>({
		width: '100%',
		height: '200px',
		backgroundColor: 'purple',
	})

	return (
		<LinearContainer
			{...defaultCSSOption}
			onClick={() =>
				onClickEvent &&
				onClickEvent({
					type: 'layout',
					CSSAttributes: defaultCSSOption,
				})
			}
		>
			{children}
		</LinearContainer>
	)
}

Linear.defaultAppendProps = buildBaseProps('container', '线性组件')
export default Linear
