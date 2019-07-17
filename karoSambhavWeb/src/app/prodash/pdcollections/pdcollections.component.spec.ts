import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PdcollectionsComponent } from './pdcollections.component';

describe('PdcollectionsComponent', () => {
  let component: PdcollectionsComponent;
  let fixture: ComponentFixture<PdcollectionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdcollectionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdcollectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
