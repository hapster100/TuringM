import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {

  @Input() options: string[]
  @Input() value: string

  @Output() valueChange = new EventEmitter<string>()

  constructor() { }

  ngOnInit() {
  }

  onSelect(option: string) {
    this.valueChange.emit(option)
  }

}
