import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookNoDescComponent } from './book-no-desc.component';

describe('BookNoDescComponent', () => {
  let component: BookNoDescComponent;
  let fixture: ComponentFixture<BookNoDescComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookNoDescComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BookNoDescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
