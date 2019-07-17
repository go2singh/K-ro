import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PdawarenessComponent } from './pdawareness.component';

describe('PdawarenessComponent', () => {
  let component: PdawarenessComponent;
  let fixture: ComponentFixture<PdawarenessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdawarenessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdawarenessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
