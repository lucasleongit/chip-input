import {
  Component,
  Input,
  forwardRef,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-chip-input',
  templateUrl: './chip-input.component.html',
  styleUrls: ['./chip-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ChipInputComponent),
      multi: true,
    },
  ],
})
export class ChipInputComponent implements ControlValueAccessor {
  @ViewChild('chipInput') chipInput: ElementRef<HTMLInputElement>;
  @Input() disabled = false;
  @Input() placeholder: string;
  @Input() suggestions: string[];

  chips: string[] = [];
  currentInput: string = '';
  filterdSuggestions: string[] = [];
  selectedId: number = -1;

  onChange = (value: string[]) => {};
  onTouched = () => {};

  writeValue(value: string[]): void {
    this.chips = value;
    this.onChange(value);
  }
  registerOnChange(fn: (value: string[]) => void): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  saveChip(): void {
    if (
      this.currentInput &&
      this.chips.indexOf(this.currentInput) === -1 &&
      this.suggestions.indexOf(this.currentInput) !== -1
    ) {
      if (!this.disabled) {
        this.writeValue([...this.chips, this.currentInput]);
      }
      this.filterdSuggestions = [];
      this.selectedId = -1;
      this.currentInput = undefined;
    }
  }

  saveSuggestionChip(suggestionChip: string) {
    if (this.chips.indexOf(suggestionChip) === -1) {
      if (!this.disabled) {
        this.writeValue([...this.chips, suggestionChip]);
      }
      this.filterdSuggestions = [];
      this.selectedId = -1;
      this.currentInput = undefined;
      this.chipInput.nativeElement.focus();
    }
  }

  setCurrentSuggestion(index: number) {
    this.selectedId = index;
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
      this.filterdSuggestions = [];
      this.selectedId = -1;
    }
  }

  move(arrowKey: string): void {
    if (this.filterdSuggestions.length > 0) {
      if (arrowKey === 'down') {
        if (this.selectedId < this.filterdSuggestions.length - 1) {
          this.selectedId++;
          this.currentInput = this.filterdSuggestions[this.selectedId];
        }
      } else if (arrowKey === 'up') {
        if (this.selectedId > 0) {
          this.selectedId--;
          this.currentInput = this.filterdSuggestions[this.selectedId];
        }
      }
    }
  }

  onInputChange($event: Object): void {
    if (this.currentInput) {
      this.filterdSuggestions = this.suggestions.filter(
        (suggestion) =>
          !this.chips.includes(suggestion) &&
          suggestion.toLowerCase().includes(this.currentInput.toLowerCase())
      );
    }
  }
}
