import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbdetailsComponent } from './abdetails.component';

describe('AbdetailsComponent', () => {
  let component: AbdetailsComponent;
  let fixture: ComponentFixture<AbdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
