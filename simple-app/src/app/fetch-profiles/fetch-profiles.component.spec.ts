import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchProfilesComponent } from './fetch-profiles.component';

describe('FetchProfilesComponent', () => {
  let component: FetchProfilesComponent;
  let fixture: ComponentFixture<FetchProfilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FetchProfilesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FetchProfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
