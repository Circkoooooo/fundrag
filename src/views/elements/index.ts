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
