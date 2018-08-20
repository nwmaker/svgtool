import PathAST from 'path-ast'

export default () => {
  const pathString = 'M8 48 L56 48 L32 12 Z'
  const ast = PathAST.parse(pathString)
  console.log(ast)
  console.log(PathAST.getCenter(ast))
  return PathAST.stringify(ast)
}
