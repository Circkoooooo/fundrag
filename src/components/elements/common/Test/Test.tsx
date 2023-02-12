import { buildBaseAppendProps } from '../..'
import { ElementFunctionComponentType } from '../../type'

const Test: ElementFunctionComponentType = () => {
	return <span>测试组件</span>
}

Test.defaultAppendProps = buildBaseAppendProps('inline', '测试')

export default Test
