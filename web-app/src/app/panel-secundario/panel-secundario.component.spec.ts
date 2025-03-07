import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelSecundarioComponent } from './panel-secundario.component';

describe('PanelSecundarioComponent', () => {
  let component: PanelSecundarioComponent;
  let fixture: ComponentFixture<PanelSecundarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PanelSecundarioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanelSecundarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
