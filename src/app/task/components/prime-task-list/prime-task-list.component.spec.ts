import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeTaskListComponent } from './prime-task-list.component';

describe('PrimeTaskListComponent', () => {
  let component: PrimeTaskListComponent;
  let fixture: ComponentFixture<PrimeTaskListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimeTaskListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimeTaskListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
