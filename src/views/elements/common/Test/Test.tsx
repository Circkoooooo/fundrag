import styled from 'styled-components'
import { createDragComponent } from '../../../../encapsulator'

const Test = () => {
	return <>测试组件</>
}

export default createDragComponent(Test, {
	componentName: '测试组件',
	isContainer: false,
})
