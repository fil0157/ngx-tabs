// Angular
import { ComponentFixture, TestBed } from '@angular/core/testing';

// Project
import { NgxTabBodyComponent } from './ngx-tab-body.component';



describe('NgxTabBodyComponent', () => {
  let component: NgxTabBodyComponent;
  let fixture: ComponentFixture<NgxTabBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxTabBodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxTabBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
