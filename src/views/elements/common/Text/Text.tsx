import { createDragComponent } from '../../../../encapsulator'

const Text = () => {
	return <>文本组件</>
}

export default createDragComponent(Text, {
	componentName: '文本组件',
	isContainer: false,
})
