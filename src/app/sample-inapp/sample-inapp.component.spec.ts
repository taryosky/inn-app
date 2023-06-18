import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleInappComponent } from './sample-inapp.component';

describe('SampleInappComponent', () => {
  let component: SampleInappComponent;
  let fixture: ComponentFixture<SampleInappComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SampleInappComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SampleInappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
