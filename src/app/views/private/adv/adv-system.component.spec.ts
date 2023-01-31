import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvSystemComponent } from './adv-system.component';

describe('AdvSystemComponent', () => {
  let component: AdvSystemComponent;
  let fixture: ComponentFixture<AdvSystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvSystemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdvSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
