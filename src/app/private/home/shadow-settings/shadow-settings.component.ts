import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { IShadowSettings } from '../../../shared/models/anime';

@Component({
  selector: 'anime-shadow-settings',
  templateUrl: './shadow-settings.component.html',
  styleUrl: './shadow-settings.component.scss',
})
export class ShadowSettingsComponent implements OnInit, OnDestroy {
  shadowOffsetX: number = 20;
  shadowOffsetY: number = 20;
  shadowBlur: number = 20;
  hideSettings: boolean = false;

  @Output() shadowSettingsEmitter: EventEmitter<IShadowSettings> = new EventEmitter<IShadowSettings>();

  shadowChange() {
    console.log(this.shadowOffsetX, this.shadowOffsetY, this.shadowBlur);
    this.shadowSettingsEmitter.emit({
      offsetX: this.shadowOffsetX,
      offsetY: this.shadowOffsetY,
      blur: this.shadowBlur,
    });
  }

  ngOnInit(): void {
    console.log('ONINIT');
  }

  ngOnDestroy(): void {
    console.log('ONDESTROY');
  }
}
