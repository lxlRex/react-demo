export default (parentPath: string, subRouter: Array<{path: string}>) => {
  return subRouter.map(e => {
    return {
      ...e,
      path: `${parentPath}${e.path}`
    }
  })
}
