export enum Move {
  Right = 'R',
  Left = 'L',
  No = 'N'
}

export const getMoveFromChar = (moveChar: string): Move => {
  switch(moveChar) {
    case Move.Right: return Move.Right
    case Move.Left: return Move.Left
    default: return Move.No
  }
}
