// truncate.directive.ts
import { Directive, ElementRef, Input, OnDestroy, OnInit } from '@angular/core';

/**
 * This directive is used to truncate text if the text is too long, it adds a button to toggle if the text must be expanded or collapsed.
 */

@Directive({
  selector: '[appDynamicTruncate]',
})
export class DynamicTruncateDirective implements OnInit, OnDestroy {
  @Input() text: string = '';
  private originalText: string = '';
  private isExpanded: boolean = false;
  private readonly maxLength: number = 400;
  private button: any;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.originalText = this.text;
    this.truncateText();
    this.setupToggleButton();
  }

  private truncateText() {
    if (this.text.length > this.maxLength) {
      const truncated = this.isExpanded ? this.originalText : this.originalText.substring(0, this.maxLength) + '...';

      this.el.nativeElement.innerHTML = truncated;
      if (this.button) this.el.nativeElement.appendChild(this.button);
    }
  }

  private clickHandler = () => {
    this.isExpanded = !this.isExpanded;
    this.truncateText();
    if (this.button) this.button.innerHTML = this.isExpanded ? 'Show less' : 'Show more';
  };

  private setupToggleButton() {
    if (this.originalText.length > this.maxLength) {
      this.button = document.createElement('button');
      this.button.className = 'toggle-button';
      this.button.innerHTML = this.isExpanded ? 'Show less' : 'Show more';
      this.button.addEventListener('click', this.clickHandler);
      this.el.nativeElement.appendChild(this.button);
    }
  }

  ngOnDestroy() {
    if (this.button) {
      this.button.removeEventListener('click', this.clickHandler);
    }
  }
}
