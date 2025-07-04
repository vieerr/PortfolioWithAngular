import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeTab } from './me-tab';

describe('MeTab', () => {
  let component: MeTab;
  let fixture: ComponentFixture<MeTab>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeTab]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeTab);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
