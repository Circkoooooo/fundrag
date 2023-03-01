import Text from './Text/Text'
import { buildComponentPackage } from '../index'
import Test from './Test/Test'

export default buildComponentPackage({
	packageName: '常用组件',
	components: [Text, Test],
})
