import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hooksangularcomponent } from './hooksangularcomponent';

describe('Hooksangularcomponent', () => {
  let component: Hooksangularcomponent;
  let fixture: ComponentFixture<Hooksangularcomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Hooksangularcomponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Hooksangularcomponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
