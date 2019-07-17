import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrOutreachComponent } from './pr-outreach.component';

describe('PrOutreachComponent', () => {
  let component: PrOutreachComponent;
  let fixture: ComponentFixture<PrOutreachComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrOutreachComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrOutreachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
