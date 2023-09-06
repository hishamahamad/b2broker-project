import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListComponent } from './list.component';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListComponent]
    });
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should catch interval error', () => {
    component.interval = 0;
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(() => { component.init() }).toThrow('Interval must be greater than 0');
    })
  });

  // test case for detecting table

  // test case for detecting additional ids
});
