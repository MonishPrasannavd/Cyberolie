import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobseakersComponent } from './jobseakers.component';

describe('JobseakersComponent', () => {
  let component: JobseakersComponent;
  let fixture: ComponentFixture<JobseakersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobseakersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JobseakersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
