import { Component, TemplateRef, ViewContainerRef } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UnlessDirective } from './unless.directive';

@Component({
  template: `<div *unless="false">Test</div>`,
})
class TestComponent {}

describe('UnlessDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let component: TestComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UnlessDirective, TestComponent],
    });
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
  });

  it('should create an instance', () => {
    const directive = new UnlessDirective({} as TemplateRef<any>, {} as ViewContainerRef);
    expect(directive).toBeTruthy();
  });
});
