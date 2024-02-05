import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookDescComponent } from './book-desc.component';

describe('BookDescComponent', () => {
  let component: BookDescComponent;
  let fixture: ComponentFixture<BookDescComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookDescComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BookDescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
