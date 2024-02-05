import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WishBtnComponent } from './wish-btn.component';

describe('WishBtnComponent', () => {
  let component: WishBtnComponent;
  let fixture: ComponentFixture<WishBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WishBtnComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WishBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
