// Angular
import { ComponentFixture, TestBed } from '@angular/core/testing';

// Project
import { NgxTabLabelComponent } from './ngx-tab-label.component';



describe('NgxTabLabelComponent', () => {
  let component: NgxTabLabelComponent;
  let fixture: ComponentFixture<NgxTabLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxTabLabelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxTabLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
