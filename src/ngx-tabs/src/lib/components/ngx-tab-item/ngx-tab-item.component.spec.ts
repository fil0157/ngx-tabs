// Angular
import { ComponentFixture, TestBed } from '@angular/core/testing';

// Project
import { NgxTabItemComponent } from './ngx-tab-item.component';



describe('NgxTabItemComponent', () => {
  let component: NgxTabItemComponent;
  let fixture: ComponentFixture<NgxTabItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxTabItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxTabItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
