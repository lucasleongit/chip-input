import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-auto-suggest',
  templateUrl: './auto-suggest.component.html',
  styleUrls: ['./auto-suggest.component.scss']
})
export class AutoSuggestComponent {
  @Input() suggestions: (string)[]
  @Input() selectedId: number
  @Output() onSuggestionClick = new EventEmitter<any>();
  @Output() onSuggestionHover = new EventEmitter<any>()
  @Output() onSuggestionOut = new EventEmitter<any>()


  onClick(suggestion: string) {
    this.onSuggestionClick.emit({
      suggestion
    });
  }

  onHover(index: number) {
    this.onSuggestionHover.emit({
      index
    })
  }

  onOut() {
    this.onSuggestionOut.emit({})
  }
}
