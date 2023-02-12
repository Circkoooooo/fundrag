import { buildBaseAppendProps } from '../..'
import { ElementFunctionComponentType } from '../../type'

const Text: ElementFunctionComponentType = () => {
	return <span>文本组件</span>
}

Text.defaultAppendProps = buildBaseAppendProps('inline', '文本组件')

export default Text
