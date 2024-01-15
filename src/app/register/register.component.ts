import { Component, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { UserService } from '../shared/data-access/user.service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { TextInput } from '../shared/components/input/text-input.component';
import { ButtonComponent } from '../shared/components/button/button.component';
import { CpfValidator } from '../utils/cpf-validator';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterModule,
    TextInput,
    ButtonComponent,
    ReactiveFormsModule,
  ],

  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  private userService = inject(UserService);
  private router = inject(Router);

  userForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.pattern(/[a-zA-Z]{3,15}/),
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/),
    ]),
    cpf: new FormControl('', [CpfValidator.validate, Validators.required]),
    phone: new FormControl('', [
      Validators.required,
      Validators.pattern('[0-9]{11,12}'),
    ]),
  });

  ngOnInit() {
    console.log(this.userForm);
  }

  goToUserList() {
    this.router.navigate(['/user-list']);
  }

  clearMask(value: string) {
    return value.replace(/\D/g, '');
  }

  registerUser() {
    console.log(this.userForm);
    if (this.userForm.errors) {
      return;
    }

    this.userService.registerUser({
      name: this.userForm.value.name!!,
      cpf: this.clearMask(this.userForm.value.cpf!!),
      phone: this.clearMask(this.userForm.value.phone!!),
      email: this.userForm.value.email!!,
    });

    this.userForm.reset({
      cpf: '',
      email: '',
      name: '',
      phone: '',
    });
  }
}
