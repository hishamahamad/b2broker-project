import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListComponent } from './list.component';
import { colors, generateData } from "../../utils/generateData";
import {DataItem} from "./data.model";

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

  // test case for detecting table data
  it('should have table data', () => {
    component.interval = 300;
    component.dataSize = 100;
    component.data = generateData(100).slice(-10);
    expect(component.data).toHaveLength(10);
    fixture.detectChanges();
    const listElement: HTMLElement = fixture.nativeElement;
    const colorCell = listElement.querySelector('.color-cell')!;
    const colorRegex = new RegExp(`(${colors.join('|')})`);
    expect(colorCell.textContent).toMatch(colorRegex)
  });

  // test case for detecting additional ids
  it('should have additional ids', () => {
    component.interval = 300;
    component.dataSize = 100;
    component.additionalIds = [203, 256, 669];
    component.data = generateData(100).slice(-10).map((item: DataItem, index: number) => ({
      ...item,
      id: component.additionalIds[index]?.toString() ?? item.id
    }));
    fixture.detectChanges();
    const listElement: HTMLElement = fixture.nativeElement;
    const tableDataCell = listElement.querySelector('td')!;
    expect(tableDataCell.textContent).toMatch(`${component.additionalIds[0]}`)
  });
});
