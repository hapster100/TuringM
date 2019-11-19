import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Rule } from '../common/rule'
import { Move } from '../common/move'

class RueleForm {
  startState: string
  endState: string
  startData: string
  rewriteData: string
  action: Move
}

@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.css']
})
export class RulesComponent implements OnInit {

  @Input() rules: Rule[] = []
  states: Set<string> = new Set<string>(['_S'])
  alphabet: Set<string> = new Set<string>(['_E'])

  ruleForm: RueleForm

  @Output() rulesChange = new EventEmitter<Rule[]>()

  constructor() { }

  ngOnInit() {
    this.ruleForm = {
      startState: [...this.states][0],
      endState: [...this.states][0],
      startData: [...this.alphabet][0],
      rewriteData: [...this.alphabet][0],
      action: Move.No
    }

    this.rules
      .forEach(rule => {
        this.states.add(rule.endState)
        this.states.add(rule.startState)
        this.alphabet.add(rule.startData)
        this.alphabet.add(rule.rewriteData)
      })

  }

  addRule(): void {
    this.rules.push(
      new Rule(
        this.ruleForm.startState,
        this.ruleForm.endState,
        this.ruleForm.startData,
        this.ruleForm.rewriteData,
        this.ruleForm.action
      )
    )
    this.rulesChange.emit(this.rules)
  }

  deleteRule(targetRule: Rule): void {
    this.rules = this.rules.filter(rule => rule !== targetRule)
    this.rulesChange.emit(this.rules)
  }

  addState(state: string): void {
    this.states.add(state)
  }

  deleteState(targetState: string) {
    this.states.delete(targetState)
  }

  addAlpha(alpha: string): void {
    this.alphabet.add(alpha)
  }

  deleteAlpha(targetAlpha: string): void {
    this.alphabet.delete(targetAlpha)
  }

  getActions(): string[] {
    const actions: string[] = []

    for (const action in Move) {
      if (Move.hasOwnProperty(action)) {
        const actionChar = Move[action];
        actions.push(actionChar)
      }
    }

    return actions
  }

}
