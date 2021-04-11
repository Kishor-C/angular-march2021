import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreProfilesComponent } from './store-profiles.component';

describe('StoreProfilesComponent', () => {
  let component: StoreProfilesComponent;
  let fixture: ComponentFixture<StoreProfilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoreProfilesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreProfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
