import { createDragComponent } from '../../../../encapsulator'

const Test = () => {
	return <span>测试组件</span>
}

export default createDragComponent(Test, {
	componentName: '测试组件',
	isContainer: false,
})
