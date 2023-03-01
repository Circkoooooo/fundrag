import common from './common'
import layout from './layout'
import { chunkOutput, DragComponentType } from './type'

const elementBucket: chunkOutput[] = [common, layout]

export default elementBucket

// build a base props for drag component, the prop will not include the automally create props such as unique key.
export function buildBaseProps(componentType: DragComponentType, componentName: string | number): any {
	let tempProps = {}
	/* eslint-disable */
	switch (componentType) {
		case 'container':
			const baseContainerProps = {
				componentType,
				componentName,
				children: [],
				// defaultStyleProperties,
			}
			baseContainerProps.componentType = 'container'

			tempProps = baseContainerProps
			break
		case 'inline':
			const baseAppendProps = {
				componentType,
				componentName,
			}
			baseAppendProps.componentType = 'inline'
			tempProps = baseAppendProps
			break
		default:
			break
	}
	/* eslint-enable */

	return tempProps
}
