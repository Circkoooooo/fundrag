import renderer, { act } from 'react-test-renderer'
import App from '../App'
import Left from '../views/layouts/Left'
import Main from '../views/layouts/Main'
import Linear from '../views/elements/layout/Linear/Linear'
import Test from '../views/elements/common/Test/Test'
import Text from "../views/elements/common/Text/Text";

describe('ensure correct process ', () => {
	const component = renderer.create(<App />)
	const instance = component.root
	const leftPanel = instance.findByType(Left)
	const mainPanel = instance.findByType(Main)
	const elementSelection = leftPanel.props.children.props

	it('load left components', () => {
		expect(elementSelection.componentPackages).toMatchSnapshot() //左侧组件的加载
	})

	it('render component in main', () => {
		const mainChildren$1 = mainPanel.props.children.props.children
		expect(mainChildren$1.length).toBe(0)
		act(() => {
			elementSelection.onItemClick(elementSelection.componentPackages[0].components[0])
		})
		const mainChildren$2 = mainPanel.props.children.props.children
		expect(mainChildren$2.length - mainChildren$1.length).toBe(1)
	})
})

describe('ensure circlate rendering', () => {
	const component = renderer.create(<App />)
	const instance = component.root
	const leftPanel = instance.findByType(Left)
	const mainPanel = instance.findByType(Main)

	it('render component in main', () => {
		//render container component
		const elementSelection$1 = leftPanel.props.children.props
		act(() => {
			elementSelection$1.onItemClick(Linear)
		})
		const linearComponentChildren$1 = mainPanel.props.children.props.children[0].props.children
		expect(linearComponentChildren$1).toBe(undefined)
		expect(mainPanel.props.children.props.children).toMatchSnapshot()

		//render non-container component to container component
		const elementSelection$2 = leftPanel.props.children.props
		act(() => {
			elementSelection$2.onItemClick(Test)
		})
		const linearComponentChildren$2 = mainPanel.props.children.props.children[0].props.children
		expect(linearComponentChildren$2.length).toBe(1)

		//rendered components tree
		expect(mainPanel.props.children.props.children).toMatchSnapshot()

		//render non-container component to container component
		act(() => {
			elementSelection$2.onItemClick(Text)
		})
		const linearComponentChildren$3 = mainPanel.props.children.props.children[0].props.children
		expect(linearComponentChildren$3.length).toBe(2)

		expect(mainPanel.props.children.props.children).toMatchSnapshot()
	})
})
