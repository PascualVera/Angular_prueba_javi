import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeropowersComponent } from './heropowers.component';

describe('HeropowersComponent', () => {
  let component: HeropowersComponent;
  let fixture: ComponentFixture<HeropowersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeropowersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeropowersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
