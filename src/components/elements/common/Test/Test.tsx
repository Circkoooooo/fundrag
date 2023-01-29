import { ElementFunctionComponentType } from '../../type'

const Test: ElementFunctionComponentType = () => {
	return <span>测试组件</span>
}

Test.componentName = '测试'

export default Test
