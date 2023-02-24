import styled from 'styled-components'
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

const Linear: ElementFunctionComponentType<DefaultContainerProps, LinearProps> = ({ children, onClickEvent, styleProperties }) => {
	return (
		<LinearContainer
			{...styleProperties}
			onClick={() =>
				onClickEvent &&
				onClickEvent({
					type: 'layout',
					styleProperties,
				})
			}
		>
			{children}
		</LinearContainer>
	)
}

Linear.defaultAppendProps = buildBaseProps('container', '线性组件', {
	width: '100%',
	height: '200px',
	backgroundColor: 'blue',
})

export default Linear
