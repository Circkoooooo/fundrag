import { createDragComponent } from '../../../../Encapsulator'

const Text = () => {
	return <span>文本组件</span>
}

// Text.defaultAppendProps = buildBaseProps('inline', '文本组件')

export default createDragComponent(Text, {
	componentName: '文本组件',
	isContainer: false,
})
