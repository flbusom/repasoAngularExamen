import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteHijoDosComponent } from './componente-hijo-dos.component';

describe('ComponenteHijoDosComponent', () => {
  let component: ComponenteHijoDosComponent;
  let fixture: ComponentFixture<ComponenteHijoDosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponenteHijoDosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponenteHijoDosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
