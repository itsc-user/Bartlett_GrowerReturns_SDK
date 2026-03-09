import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiptdateComponent } from './receiptdate.component';

describe('ReceiptdateComponent', () => {
  let component: ReceiptdateComponent;
  let fixture: ComponentFixture<ReceiptdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReceiptdateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReceiptdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
