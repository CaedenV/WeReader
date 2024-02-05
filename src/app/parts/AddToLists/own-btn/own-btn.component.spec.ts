import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnBtnComponent } from './own-btn.component';

describe('OwnBtnComponent', () => {
  let component: OwnBtnComponent;
  let fixture: ComponentFixture<OwnBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OwnBtnComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OwnBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
