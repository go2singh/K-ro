import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PdimpactComponent } from './pdimpact.component';

describe('PdimpactComponent', () => {
  let component: PdimpactComponent;
  let fixture: ComponentFixture<PdimpactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdimpactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdimpactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
