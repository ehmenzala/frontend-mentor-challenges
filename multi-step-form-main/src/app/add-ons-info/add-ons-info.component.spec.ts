import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOnsInfoComponent } from './add-ons-info.component';

describe('AddOnsInfoComponent', () => {
  let component: AddOnsInfoComponent;
  let fixture: ComponentFixture<AddOnsInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddOnsInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddOnsInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
