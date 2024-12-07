import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'anime-like',
  templateUrl: './like.component.html',
  styleUrl: './like.component.scss'
})
export class LikeComponent {
  @Input() isPrimary: boolean = true;
  @Output() likeEmitter: EventEmitter<any> = new EventEmitter<any>();

  like() {
    this.likeEmitter.emit();
  }
}
