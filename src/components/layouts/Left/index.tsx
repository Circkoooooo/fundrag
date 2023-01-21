import React from 'react'
import { LeftPanel } from './styled'

interface LeftProps {
	isCollapse: boolean
}

const Left: React.FC<LeftProps> = ({ isCollapse }) => {
	return <LeftPanel collapse={isCollapse} />
}

export default Left
