import renderer, { act } from 'react-test-renderer'
import App from '../App'
import Left from '../views/layouts/Left'
import Main from '../views/layouts/Main'
import Linear from '../views/elements/layout/Linear/Linear'
import Test from '../views/elements/common/Test/Test'
import ElementSelection from '../views/elements/ElementSelection'
import { MainScreen } from '../views/layouts/Main/styled'

describe('ensure circulate rendering', () => {
	const component = renderer.create(<App />)
	const instance = component.root
	const left = instance.findByType(Left)
	const elementSelection = left.findByType(ElementSelection)
	const main = instance.findByType(Main)
	const mainScreen = main.findByType(MainScreen)

	it('render component', () => {
		act(() => {
			elementSelection.props.onItemClick(Linear)
		})

		expect(mainScreen.props.children).toMatchSnapshot()

		act(() => {
			elementSelection.props.onItemClick(Test)
		})

		expect(mainScreen.props.children).toMatchSnapshot()
	})

	it('render children', () => {
		act(() => {
			elementSelection.props.onItemClick(Linear)
		})

		const linear = mainScreen.props.children.props.children[0]
		act(() => {
			linear.props.onSelectFn()
		})

		act(() => {
			elementSelection.props.onItemClick(Test)
		})

		expect(mainScreen.props.children).toMatchSnapshot()
	})
})
