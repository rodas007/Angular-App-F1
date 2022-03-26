import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryTeamsComponent } from './gallery-teams.component';

describe('GalleryTeamsComponent', () => {
  let component: GalleryTeamsComponent;
  let fixture: ComponentFixture<GalleryTeamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GalleryTeamsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryTeamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
