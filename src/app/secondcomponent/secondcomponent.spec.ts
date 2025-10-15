import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Secondcomponent } from './secondcomponent';

describe('Secondcomponent', () => {
  let component: Secondcomponent;
  let fixture: ComponentFixture<Secondcomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Secondcomponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Secondcomponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
