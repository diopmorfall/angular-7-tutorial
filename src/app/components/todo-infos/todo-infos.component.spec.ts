import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoInfosComponent } from './todo-infos.component';

describe('TodoInfosComponent', () => {
  let component: TodoInfosComponent;
  let fixture: ComponentFixture<TodoInfosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoInfosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoInfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
