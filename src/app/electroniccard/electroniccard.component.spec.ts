import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectroniccardComponent } from './electroniccard.component';

describe('ElectroniccardComponent', () => {
  let component: ElectroniccardComponent;
  let fixture: ComponentFixture<ElectroniccardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElectroniccardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElectroniccardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
