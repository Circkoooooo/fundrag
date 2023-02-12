import common from './common'
import layout from './layout'
import { chunkOutput, DragComponentType } from './type'

const elementBucket: chunkOutput[] = [common, layout]

export default elementBucket

/**
 * @description build a base props for drag component, the prop will not include the automally create props such as unique key.
 * @author onecirckoooooo
 * @date 2023/02/12 23:51
 * @param {DragComponentType} componentType
 * @param {(string | number)} componentName
 * @return {*}  {*}
 */
export function buildBaseAppendProps(
	componentType: DragComponentType,
	componentName: string | number
): any {
	const baseAppendProps = {
		componentType,
		componentName,
	}
	/* eslint-disable */
	switch (componentType) {
		case 'container':
			baseAppendProps.componentType = 'container'
			break
		case 'inline':
			baseAppendProps.componentType = 'inline'
			break
		default:
			break
	}
	/* eslint-enable */

	return baseAppendProps
}
