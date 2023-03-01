import { createDragComponent } from '../index'
import React from 'react'

describe('encapsulate react component to drag component', () => {
	it('encapsulate a instance', () => {
		const realNode = React.createElement('div', {}, '123')

		const dragComponent = createDragComponent(realNode, {
			isContainer: false,
			componentName: '线性组件',
		})

		expect(dragComponent).toMatchObject({
			realNode,
			isContainer: false,
			componentRenderConfig: {
				componentName: '线性组件',
			},
		})

		expect(dragComponent).toMatchSnapshot()
	})
})
