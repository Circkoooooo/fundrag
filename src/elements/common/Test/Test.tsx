import { buildBaseProps } from '../..'
import { ElementFunctionComponentType } from '../../type'

const Test: ElementFunctionComponentType = () => {
	return <span>测试组件</span>
}

Test.defaultAppendProps = buildBaseProps('inline', '测试', {
	width: '10px',
	height: '100px',
	backgroundColor: 'red',
})

export default Test
