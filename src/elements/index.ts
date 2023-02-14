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
export function buildBaseProps(
	componentType: DragComponentType,
	componentName: string | number
): any {
	let tempProps = {}
	/* eslint-disable */
	switch (componentType) {
		case 'container':
			const baseContainerProps = {
				componentType,
				componentName,
				children: [],
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
