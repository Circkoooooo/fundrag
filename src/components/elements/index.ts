import common from './common'
import layout from './layout'
import { ElementComponentType } from './type'

const elementBucket: {
	name: string
	elements: ElementComponentType[]
}[] = [common, layout]

export default elementBucket
