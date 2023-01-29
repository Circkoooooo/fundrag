import { ElementFunctionComponentType } from '../../type'

const Text: ElementFunctionComponentType = () => {
	return <span>文本组件</span>
}

Text.componentName = '文本组件'

export default Text
