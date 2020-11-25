import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-chip-input',
  templateUrl: './chip-input.component.html',
  styleUrls: ['./chip-input.component.scss'],
})
export class ChipInputComponent {
  @Input() placeholder: string;

  chips: string[] = [];
  currentInput: string = '';

  saveChip(): void {
    if (this.currentInput && this.chips.indexOf(this.currentInput) === -1) {
      this.chips.push(this.currentInput);
      this.currentInput = undefined;
    }
  }

  deleteChip(index: number): void {
    this.chips.splice(index, 1);
  }

  backspaceDelete(): void {
    if (this.currentInput === undefined) {
      this.chips.splice(this.chips.length - 1);
    }
    if (this.currentInput === '') {
      this.currentInput = undefined;
    }
  }

}
