import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteHijoUnoComponent } from './componente-hijo-uno.component';

describe('ComponenteHijoUnoComponent', () => {
  let component: ComponenteHijoUnoComponent;
  let fixture: ComponentFixture<ComponenteHijoUnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponenteHijoUnoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponenteHijoUnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
