import { buildComponentPackage } from '../index'
import Linear from '../layout/Linear/Linear'

describe('package the components correctly', () => {
	it('make it tobe a output object', () => {
		const pkg = buildComponentPackage({
			components: [Linear],
			packageName: '布局组件',
		})

		expect(pkg).toMatchObject({
			components: [Linear],
			packageName: '布局组件',
		})
	})
})
