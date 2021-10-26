import { Directive } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';

@Directive({
  selector: '[appTrimValue]'
})
export class TrimValueDirective {

  constructor(private ngControl: NgControl) {
    this.trimValueAccess(this.ngControl.valueAccessor);
  }

  private trimValueAccess(valueAccessor: any | ControlValueAccessor): void {
    const original = valueAccessor.registerOnChange;
    console.log('🍌🍌🍌 Estoy aqui');
    valueAccessor.registerOnChange = (fn: (_: unknown) => void) => original.call(valueAccessor, (value: unknown) => {
      console.log('👏👏👏👏', value);
      return fn((typeof value === 'string') ? value.trim() : value);
    });
  }

}
