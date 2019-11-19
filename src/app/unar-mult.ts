import { Rule } from './common/rule'
import { getMoveFromChar } from './common/move'

export const multRules = [
  {startState: "_S", endState: "_S", startData: "1", rewriteData: "1", action: "R"},
  {startState: "_S", endState: "q1", startData: "x", rewriteData: "x", action: "R"},
  {startState: "_S", endState: "_S", startData: "*", rewriteData: "*", action: "R"},
  {startState: "q1", endState: "q2", startData: "1", rewriteData: "a", action: "R"},
  {startState: "q2", endState: "q2", startData: "1", rewriteData: "1", action: "L"},
  {startState: "q2", endState: "q3", startData: "x", rewriteData: "x", action: "L"},
  {startState: "q2", endState: "q2", startData: "=", rewriteData: "=", action: "L"},
  {startState: "q2", endState: "q2", startData: "a", rewriteData: "a", action: "L"},
  {startState: "q3", endState: "q4", startData: "1", rewriteData: "a", action: "R"},
  {startState: "q3", endState: "q3", startData: "a", rewriteData: "a", action: "L"},
  {startState: "q3", endState: "q6", startData: "*", rewriteData: "*", action: "R"},
  {startState: "q4", endState: "q4", startData: "1", rewriteData: "1", action: "R"},
  {startState: "q4", endState: "q4", startData: "x", rewriteData: "x", action: "R"},
  {startState: "q4", endState: "q4", startData: "=", rewriteData: "=", action: "R"},
  {startState: "q4", endState: "q4", startData: "a", rewriteData: "a", action: "R"},
  {startState: "q4", endState: "q5", startData: "*", rewriteData: "1", action: "R"},
  {startState: "q5", endState: "q2", startData: "_E", rewriteData: "*", action: "L"},
  {startState: "q6", endState: "q7", startData: "x", rewriteData: "x", action: "R"},
  {startState: "q6", endState: "q6", startData: "a", rewriteData: "1", action: "R"},
  {startState: "q7", endState: "q2", startData: "1", rewriteData: "a", action: "R"},
  {startState: "q7", endState: "q8", startData: "=", rewriteData: "=", action: "L"},
  {startState: "q7", endState: "q7", startData: "a", rewriteData: "a", action: "R"},
  {startState: "q8", endState: "q9", startData: "x", rewriteData: "x", action: "N"},
  {startState: "q8", endState: "q8", startData: "a", rewriteData: "1", action: "L"},
].map(rule => new Rule(
  rule.startState, rule.endState,
  rule.startData, rule.rewriteData,
  getMoveFromChar(rule.action)
))

export const multMemory = ['*', '1', '1', '1', 'x', '1', '1', '1', '=', '*']
