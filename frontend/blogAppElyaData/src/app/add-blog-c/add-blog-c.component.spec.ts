import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBlogCComponent } from './add-blog-c.component';

describe('AddBlogCComponent', () => {
  let component: AddBlogCComponent;
  let fixture: ComponentFixture<AddBlogCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBlogCComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddBlogCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
