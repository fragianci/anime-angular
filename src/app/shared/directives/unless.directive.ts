import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[unless]'
})
export class UnlessDirective {

  constructor(
    private templateRef: TemplateRef<any>,
    private containerRef: ViewContainerRef
  ) { }

  @Input() set unless(condition: boolean) {
    if (!condition) {
      this.containerRef.createEmbeddedView(this.templateRef);
    } else if (condition) {
      this.containerRef.clear();
    }
  }

}
