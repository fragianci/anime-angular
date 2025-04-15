import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CustomShadowDirective } from './custom-shadow.directive';
import { Renderer2 } from '@angular/core';

@Component({
  template: `<div animeCustomShadow></div>`,
})
class TestComponent {}

describe('CustomShadowDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let component: TestComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomShadowDirective, TestComponent],
    });
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
  });

  it('should create an instance', () => {
    const directive = new CustomShadowDirective({ nativeElement: document.createElement('div') } as any, TestBed.inject(Renderer2));
    expect(directive).toBeTruthy();
  });
});
