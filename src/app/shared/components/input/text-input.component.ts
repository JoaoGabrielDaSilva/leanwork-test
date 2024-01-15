import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, Input, forwardRef } from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  FormsModule,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';

@Component({
  selector: 'text-input',
  templateUrl: './text-input.component.html',
  styleUrl: './text-input.component.scss',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, NgxMaskDirective],
  providers: [provideNgxMask({})],
})
export class TextInput {
  @Input() placeholder = '';
  @Input() name = '';
  @Input() control: FormControl = new FormControl();
  @Input() mask = '';
  @Input() errorMessage = '';
  @Input() required = '';
}
