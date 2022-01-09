export const winningBoards = [
// Across:
    [0, 1, 2, 3],
    [4, 5, 6, 7],
    [8, 9, 10, 11],
    [12, 13, 14, 15],
// Down:
    [0, 4, 8, 12],
    [1, 5, 9, 13],
    [2, 6, 10, 14],
    [3, 7, 11, 15],
// Diag:
    [0, 5, 10, 15],
    [3, 6, 9, 12],
]

export const getRandomIndex = (arr) => {
    return Math.floor(Math.random() * arr.length)
  }