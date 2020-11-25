import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-chip',
  templateUrl: './chip.component.html',
  styleUrls: ['./chip.component.scss']
})
export class ChipComponent {
  @Output() onRemove = new EventEmitter<any>();

  onClose(): void {
    this.onRemove.emit({});
  }
}
