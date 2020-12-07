import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompteDetailsComponent } from './compte-details.component';

describe('CompteDetailsComponent', () => {
  let component: CompteDetailsComponent;
  let fixture: ComponentFixture<CompteDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompteDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompteDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
