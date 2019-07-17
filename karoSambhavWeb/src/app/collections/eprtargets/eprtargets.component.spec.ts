import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EprtargetsComponent } from './eprtargets.component';

describe('EprtargetsComponent', () => {
  let component: EprtargetsComponent;
  let fixture: ComponentFixture<EprtargetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EprtargetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EprtargetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
