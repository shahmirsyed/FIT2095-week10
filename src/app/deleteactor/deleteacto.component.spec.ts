import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteactoComponent } from './deleteacto.component';

describe('DeleteactoComponent', () => {
  let component: DeleteactoComponent;
  let fixture: ComponentFixture<DeleteactoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteactoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
