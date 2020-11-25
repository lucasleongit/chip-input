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

  onClick(suggestion: string) {
    this.onSuggestionClick.emit({
      suggestion
    });
  }
}
