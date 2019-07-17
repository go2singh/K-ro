import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PdnetworkComponent } from './pdnetwork.component';

describe('PdnetworkComponent', () => {
  let component: PdnetworkComponent;
  let fixture: ComponentFixture<PdnetworkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdnetworkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdnetworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
