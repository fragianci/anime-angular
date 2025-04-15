import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DynamicTruncateDirective } from './dynamic-truncate.directive';

@Component({
  template: `<div appDynamicTruncate [text]="'Test text'"></div>`,
})
class TestComponent {}

describe('DynamicTruncateDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let component: TestComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DynamicTruncateDirective, TestComponent],
    });
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
  });

  it('should create an instance', () => {
    const directive = new DynamicTruncateDirective({ nativeElement: document.createElement('div') } as any);
    expect(directive).toBeTruthy();
  });
});
