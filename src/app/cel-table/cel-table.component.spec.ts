import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CelTableComponent } from './cel-table.component';

describe('CelTableComponent', () => {
  let component: CelTableComponent;
  let fixture: ComponentFixture<CelTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CelTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CelTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
