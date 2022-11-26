import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewallcomponentComponent } from './viewallcomponent.component';

describe('ViewallcomponentComponent', () => {
  let component: ViewallcomponentComponent;
  let fixture: ComponentFixture<ViewallcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewallcomponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewallcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
