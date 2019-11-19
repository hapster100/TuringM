import { Component } from '@angular/core';
import { Rule } from './common/rule'
import { multRules, multMemory } from './unar-mult'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  rules: Rule[] = multRules
  memory: Array<string> = multMemory
}

