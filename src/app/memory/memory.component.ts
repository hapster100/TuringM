import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core'
import { Rule } from '../common/rule'
import { Move } from '../common/move'

@Component({
  selector: 'app-memory',
  templateUrl: './memory.component.html',
  styleUrls: ['./memory.component.css']
})
export class MemoryComponent implements OnInit {

  @Input() rules: Rule[]
  @Input() memory: string[]

  @Output() memoryChange= new EventEmitter<Array<string>>()

  position: number = 0
  wasRead: string = ''

  memoryStart: number = 0
  memoryEnd: number

  isWork: boolean = false
  workInterval: NodeJS.Timer = null
  currentState = '_S'

  constructor() { }

  ngOnInit() {
    this.memoryEnd = this.memory.length
  }

  write(x: string): void {
    this.memory[this.position] = x
    this.memoryChange.emit(this.memory)
  }

  read(): string {
    this.wasRead = this.memory[this.position]
    return this.wasRead
  }


  toLeft() {
    this.position -= 1
    if(this.position < this.memoryStart) {
      this.memoryStart -= 1
      this.memory[this.memoryStart] = '_E'
    }
  }

  toRight() {
    this.position += 1
    if(this.position >= this.memoryEnd) {
      this.memoryEnd += 1
      this.memory[this.memoryEnd-1] = '_E'
    }
  }

  zeroStartMemory(): string[] {
    const zsMemory = []
    for(let i = this.memoryStart; i < this.memoryEnd; i++) {
      zsMemory.push(this.memory[i])
    }
    return zsMemory
  }

  zeroStartPosition(): number {
    return this.position - this.memoryStart
  }

  toggleWork(): void {
    if(this.isWork) {
      this.isWork = false
      clearInterval(this.workInterval)
    } else {
      this.isWork = true
      this.workInterval = setInterval(() => {
        const currData = this.read()
        const currRule = this.rules
          .find(rule => {
            return rule.startState === this.currentState && rule.startData === currData
          })
        if(currRule) {
          this.write(currRule.rewriteData)
          if(currRule.action === Move.Left) this.toLeft()
          if(currRule.action === Move.Right) this.toRight()
          this.currentState = currRule.endState
        } else {
          this.isWork = false
          clearInterval(this.workInterval)
        }
      }, 100)
    }
  }

  ngOnDestroy() {
    if(this.isWork) {
      clearInterval(this.workInterval)
    }
  }

}
