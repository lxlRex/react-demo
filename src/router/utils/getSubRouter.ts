export default (subRouter: {path: string}[], parentPath = '') => {
  if (parentPath) {
    return subRouter.map(e => {
      return {
        ...e,
        path: `${parentPath}${e.path}`
      }
    })
  }
  return subRouter
}
