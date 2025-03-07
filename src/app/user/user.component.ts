import { Component, computed, EventEmitter, input, Input, output, Output, signal } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { type User } from './user.model';
import { CardComponent } from "../shared/card/card.component";

// type User ={
//   id: string;
//   name: string;
//   avatar: string;
// }


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  @Input({required:true}) user!: User;
//  @Input({required:true}) id!: string;
// @Input({required:true}) name!: string;
@Input({required:true}) selected!:boolean
 @Output() select = new EventEmitter<string>();
// select = output<string>();

avatar = input<string>();
name = input.required<string>();


imagePath = computed(() => `assets/users/${this.avatar()}`)

onSelectUser(){
  this.select.emit(this.user.id);
   }
}
