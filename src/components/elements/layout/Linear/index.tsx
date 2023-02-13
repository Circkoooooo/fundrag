import styled from 'styled-components'
import { buildBaseAppendProps } from '../..'
import { ElementFunctionComponentType } from '../../type'
import { LayoutBaseProps } from '../types'

const LinearContainer = styled.div`
	width: 100%;
	height: 200px;
	background-color: purple;
`

interface LinearProps extends LayoutBaseProps {}

const Linear: ElementFunctionComponentType<LinearProps> = ({ children }) => {
	return <LinearContainer>{children}</LinearContainer>
}

Linear.defaultAppendProps = buildBaseAppendProps('container', '线性组件')
export default Linear