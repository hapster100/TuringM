import { Move } from './move'

export class Rule {
  startState: string
  endState: string

  startData: string
  rewriteData: string

  action: Move

  constructor(
    stratState: string,
    endState: string,
    startData: string,
    rewriteData: string,
    action: Move
  ) {
    this.startState = stratState
    this.endState = endState
    this.startData = startData || '_E'
    this.rewriteData = rewriteData || '_E'
    this.action = action
  }

  ruleString(): string {
    return `state: ${this.startState} => ${this.endState}
    data: ${this.startData} => ${this.rewriteData}
    action: ${this.action}`
  }
}
