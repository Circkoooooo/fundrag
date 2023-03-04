import React from 'react'
import { createDragComponent } from '..'

describe('encapsulate react component to drag component', () => {
	it('encapsulate a instance', () => {
		const realNode = () => {
			return React.createElement('div', {}, '123')
		}
		let dragComponent = createDragComponent(realNode, {
			isContainer: false,
			componentName: '线性组件',
		})
		expect(dragComponent).toMatchSnapshot()
		dragComponent = createDragComponent(realNode, {
			isContainer: true,
			componentName: '线性组件',
		})
		expect(dragComponent).toMatchSnapshot()
	})
})
