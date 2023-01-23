import { ElementComponentType } from '../../type'

const Test: React.FC<ElementComponentType> = () => {
	return <span>测试组件</span>
}

Test.displayName = '测试'

export default Test
