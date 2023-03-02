import { componentUniqueKey } from '../key'

describe('unique key', () => {
	it('component unique key', () => {
		const k1 = componentUniqueKey()
		const k2 = componentUniqueKey()

		expect(typeof k1).toBe('string')
		expect(k1).not.toBe(k2)
	})
})
