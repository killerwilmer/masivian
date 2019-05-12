import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFichaComponent } from './create-ficha.component';

describe('CreateFichaComponent', () => {
  let component: CreateFichaComponent;
  let fixture: ComponentFixture<CreateFichaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateFichaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateFichaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
