import styled from 'styled-components'
import { ElementComponentType } from '../../type'

const LinearContainer = styled.div`
	width: 100%;
	height: 200px;
	background-color: purple;
`
const Linear: ElementComponentType = () => {
	return <LinearContainer>linear</LinearContainer>
}

Linear.componentName = '线性布局'

export default Linear
