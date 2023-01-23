import React from 'react'
import common from './common'
import layout from './layout'
import { ElementComponentType } from './type'

const elementBucket: {
	name: string
	elements: React.FC<ElementComponentType>[]
}[] = [common, layout]

export default elementBucket
