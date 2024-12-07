import { Directive, ElementRef, Input, OnChanges, OnInit, Renderer2, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[animeCustomShadow]',
})
export class CustomShadowDirective implements OnInit, OnChanges {
  @Input() shadowColor: string = 'rgba(0, 0, 0, 0.5)';
  @Input() shadowOffsetX: number = 10;
  @Input() shadowOffsetY: number = 10;
  @Input() shadowBlur: number = 20;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges): void {
    this.renderer.setStyle(
      this.el.nativeElement,
      'box-shadow',
      `${this.shadowOffsetX}px ${this.shadowOffsetY}px ${this.shadowBlur}px ${this.shadowColor}`
    );
  }
}
