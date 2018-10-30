import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgitListComponent } from './widgit-list.component';

describe('WidgitListComponent', () => {
  let component: WidgitListComponent;
  let fixture: ComponentFixture<WidgitListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgitListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgitListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
