import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'anime-error-handler',
  templateUrl: './error-handler.component.html',
  styleUrl: './error-handler.component.scss'
})
export class ErrorHandlerComponent implements OnChanges {
  @Input() error!: any;
  @Input() element: string = '';

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);

  }


}
