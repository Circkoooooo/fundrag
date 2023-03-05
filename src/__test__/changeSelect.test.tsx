import renderer, { act } from 'react-test-renderer'
import App from '../App'
import Left from '../views/layouts/Left'
import ElementSelection from '../views/elements/ElementSelection'
import Main from '../views/layouts/Main'
import { MainScreen } from '../views/layouts/Main/styled'
import Linear from '../views/elements/layout/Linear/Linear'

describe('change select component after render', () => {
	const component = renderer.create(<App />)
	const instance = component.root
	const left = instance.findByType(Left)
	const elementSelection = left.findByType(ElementSelection)
	const main = instance.findByType(Main)

	it('cancel select', () => {
		let mainScreen = main.findByType(MainScreen)
		act(() => {
			elementSelection.props.onItemClick(Linear)
		})
		mainScreen = main.findByType(MainScreen)

		act(() => {
			mainScreen.props.onClick()
		})

		mainScreen = main.findByType(MainScreen)
		act(() => {
			elementSelection.props.onItemClick(Linear)
		})
		expect(mainScreen.props.children).toMatchSnapshot()
	})
})
