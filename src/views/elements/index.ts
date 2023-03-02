import { DragComponent } from '../../encapsulator'
import layout from './layout'
import common from './common'

export type DragComponentPackage = {
	packageName: string
	components: DragComponent[]
}

export function buildComponentPackage(dragComponentPackage: DragComponentPackage) {
	return dragComponentPackage
}

export const componentPackages: DragComponentPackage[] = [common, layout]

// // const elementBucket: chunkOutput[] = [common]
//
// // export default elementBucket
//
// // build a base props for drag component, the prop will not include the automally create props such as unique key.
// export function buildBaseProps(componentType: DragComponentType, componentName: string | number): any {
// 	let tempProps = {}
// 	/* eslint-disable */
// 	switch (componentType) {
// 		case 'container':
// 			const baseContainerProps = {
// 				componentType,
// 				componentName,
// 				children: [],
// 				// defaultStyleProperties,
// 			}
// 			baseContainerProps.componentType = 'container'
//
// 			tempProps = baseContainerProps
// 			break
// 		case 'inline':
// 			const baseAppendProps = {
// 				componentType,
// 				componentName,
// 			}
// 			baseAppendProps.componentType = 'inline'
// 			tempProps = baseAppendProps
// 			break
// 		default:
// 			break
// 	}
// 	/* eslint-enable */
//
// 	return tempProps
// }
