import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatdrchComponent } from './latdrch.component';

describe('LatdrchComponent', () => {
  let component: LatdrchComponent;
  let fixture: ComponentFixture<LatdrchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LatdrchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LatdrchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
