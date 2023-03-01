import ElementSelection from '../ElementSelection'
import renderer from 'react-test-renderer'

describe('component fixed', () => {
	it('ElementSelection', () => {
		const component = renderer.create(<ElementSelection />)
		expect(component).toMatchSnapshot()
	})
})
