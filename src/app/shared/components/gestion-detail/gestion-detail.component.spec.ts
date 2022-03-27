import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionDetailComponent } from './gestion-detail.component';

describe('GestionDetailComponent', () => {
  let component: GestionDetailComponent;
  let fixture: ComponentFixture<GestionDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
