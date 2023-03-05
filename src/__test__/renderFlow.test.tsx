import renderer, { act } from 'react-test-renderer'
import App from '../App'
import Left from '../views/layouts/Left'
import Main from '../views/layouts/Main'
import Linear from '../views/elements/layout/Linear/Linear'
import Test from '../views/elements/common/Test/Test'
import Text from '../views/elements/common/Text/Text'

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

describe('ensure circulate rendering', () => {
	const component = renderer.create(<App />)
	const instance = component.root
	const leftPanel = instance.findByType(Left)
	const mainPanel = instance.findByType(Main)
	let elementSelection = leftPanel.props.children.props
	let linearComponentChildren: any = null

	it('render components in main', () => {
		//render container component
		act(() => {
			elementSelection.onItemClick(Linear)
		})
		linearComponentChildren = mainPanel.props.children.props.children[0].props.children
		expect(linearComponentChildren).toBe(undefined)
		expect(mainPanel.props.children.props.children).toMatchSnapshot()

		//render non-container component to container component
		elementSelection = leftPanel.props.children.props
		act(() => {
			elementSelection.onItemClick(Test)
		})
		linearComponentChildren = mainPanel.props.children.props.children[0].props.children
		expect(linearComponentChildren.length).toBe(1)

		//rendered components tree
		expect(mainPanel.props.children.props.children).toMatchSnapshot()

		//render non-container component to container component
		act(() => {
			elementSelection.onItemClick(Text)
		})

		linearComponentChildren = mainPanel.props.children.props.children[0].props.children
		expect(linearComponentChildren.length).toBe(2)

		expect(mainPanel.props.children.props.children).toMatchSnapshot()
	})

	it('render null', () => {
		act(() => {
			elementSelection.onItemClick(null)
		})
		linearComponentChildren = mainPanel.props.children.props.children[0].props.children
		expect(linearComponentChildren.length).toBe(2)
	})
})
