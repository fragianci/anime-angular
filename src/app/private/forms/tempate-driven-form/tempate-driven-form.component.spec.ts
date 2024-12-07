import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempateDrivenFormComponent } from './tempate-driven-form.component';

describe('TempateDrivenFormComponent', () => {
  let component: TempateDrivenFormComponent;
  let fixture: ComponentFixture<TempateDrivenFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TempateDrivenFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TempateDrivenFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
