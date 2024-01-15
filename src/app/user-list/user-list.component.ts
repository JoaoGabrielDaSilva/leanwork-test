import { Component, inject, signal } from '@angular/core';
import { UserService } from '../shared/data-access/user.service';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { ionArrowBack, ionTrash, ionPencil } from '@ng-icons/ionicons';
import { CommonModule, Location } from '@angular/common';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';

@Component({
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss',
  standalone: true,
  imports: [CommonModule, NgIconComponent, NgxMaskPipe],
  viewProviders: [provideIcons({ ionTrash, ionPencil, ionArrowBack })],
  providers: [provideNgxMask()],
})
export class UserList {
  private userService = inject(UserService);
  private location = inject(Location);

  modalVisible = signal(false);

  openModal() {
    this.modalVisible.set(true);
    console.log(12379182738912738927);
  }
  closeModal() {
    this.modalVisible.set(false);
  }

  users = this.userService.getUsers();

  goBack() {
    this.location.back();
  }
}
