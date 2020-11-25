import { Component, Input, forwardRef } from '@angular/core';
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
  @Input() disabled = false;
  @Input() placeholder: string;

  chips: string[] = [];
  currentInput: string = '';

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
    if (this.currentInput && this.chips.indexOf(this.currentInput) === -1) {
      if (!this.disabled) {
        this.writeValue([...this.chips, this.currentInput]);
      }
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
