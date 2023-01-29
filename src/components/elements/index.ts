import common from './common'
import layout from './layout'
import { ElementFunctionComponentType } from './type'

const elementBucket: {
	name: string
	elements: ElementFunctionComponentType[]
}[] = [common, layout]

export default elementBucket
