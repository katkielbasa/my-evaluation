import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitServerComponent } from './submit-server.component';
import { expect } from 'jasmine';
import { describe } from 'jasmine';

describe('SubmitServerComponent', () => {
  let component: SubmitServerComponent;
  let fixture: ComponentFixture<SubmitServerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmitServerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
