export const componentUniqueKey = () => {
	return (new Date().getTime() + Math.random()).toString()
}
