import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Conditionalcomponent } from './conditionalcomponent';

describe('Conditionalcomponent', () => {
  let component: Conditionalcomponent;
  let fixture: ComponentFixture<Conditionalcomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Conditionalcomponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Conditionalcomponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
