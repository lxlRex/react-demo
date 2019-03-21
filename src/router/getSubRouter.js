export default (parentPath, subRouter) => {
  return subRouter.map(e => {
    return {
      ...e,
      path: `${parentPath}${e.path}`
    }
  })
}
