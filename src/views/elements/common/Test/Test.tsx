import styled from 'styled-components'
import { createDragComponent } from '../../../../encapsulator'

const TestContainer = styled.span`
	background-color: red;
`
const Test = () => {
	return <TestContainer>测试组件</TestContainer>
}

export default createDragComponent(Test, {
	componentName: '测试组件',
	isContainer: false,
})
