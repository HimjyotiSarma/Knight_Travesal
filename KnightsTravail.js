import Queue from './Queue.js'
import Node from './Node.js'

function knightPossibleTraversal(currentXIndex, currentYIndex, visitedIndexes) {
  const max_X_Index = 8
  const max_Y_Index = 8
  let result = []
  let possible_Traversal = [
    [2, 1],
    [2, -1],
    [1, 2],
    [-1, 2],
    [-2, 1],
    [-2, -1],
    [-1, -2],
    [1, -2],
  ]
  for (let current of possible_Traversal) {
    let dx = currentXIndex + current[0]
    let dy = currentYIndex + current[1]
    if (
      dx >= 0 &&
      dx < max_X_Index &&
      dy >= 0 &&
      dy < max_Y_Index &&
      visitedIndexes[dx][dy] == false
    ) {
      result.push([dx, dy])
    }
  }
  return result
}
// Use Breadth Search of BST or Level Order

function KnightsTravail(
  [initial_X_Index, initial_Y_Index],
  [target_X_Index, target_Y_Index]
) {
  // let routeLength = 0
  let queue = new Queue()
  let visitedIndexes = Array.from({ length: 8 }, () =>
    Array.from({ length: 8 }, () => false)
  )
  queue.enqueue(
    Node(initial_X_Index, initial_Y_Index, 0, [
      [initial_X_Index, initial_Y_Index],
    ])
  )
  visitedIndexes[initial_X_Index][initial_Y_Index] = true
  while (!queue.isEmpty()) {
    let firstItem = queue.dequeue()
    let xItem = firstItem.X_Index
    let yItem = firstItem.Y_Index
    let routeLength = firstItem.routeDis
    let traversedPath = firstItem.path

    if (target_X_Index == xItem && target_Y_Index == yItem) {
      console.log(`You made it in ${routeLength} moves!  Here's your path`)
      return traversedPath
    } else {
      let allPossibleRoutes = knightPossibleTraversal(
        xItem,
        yItem,
        visitedIndexes
      )
      for (let routeArr of allPossibleRoutes) {
        if (visitedIndexes[routeArr[0]][routeArr[1]] == false) {
          visitedIndexes[routeArr[0]][routeArr[1]] = true
          queue.enqueue(
            Node(routeArr[0], routeArr[1], routeLength + 1, [
              ...traversedPath,
              [routeArr[0], routeArr[1]],
            ])
          )
        }
      }
    }
  }
}
export default KnightsTravail
