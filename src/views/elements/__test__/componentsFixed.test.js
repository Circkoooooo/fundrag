import renderer from 'react-test-renderer'
import ElementSelection from '../ElementSelection'

describe('component fixed', () => {
	it('ElementSelection', () => {
		const component = renderer.create(<ElementSelection />)
		expect(component).toMatchSnapshot()
	})
})
