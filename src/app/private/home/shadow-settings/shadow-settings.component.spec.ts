import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShadowSettingsComponent } from './shadow-settings.component';

describe('ShadowSettingsComponent', () => {
  let component: ShadowSettingsComponent;
  let fixture: ComponentFixture<ShadowSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShadowSettingsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShadowSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
