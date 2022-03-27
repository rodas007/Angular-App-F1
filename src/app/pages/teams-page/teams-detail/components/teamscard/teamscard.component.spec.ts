import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamscardComponent } from './teamscard.component';

describe('TeamscardComponent', () => {
  let component: TeamscardComponent;
  let fixture: ComponentFixture<TeamscardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamscardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamscardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
