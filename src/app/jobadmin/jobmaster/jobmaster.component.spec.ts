import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobmasterComponent } from './jobmaster.component';

describe('JobmasterComponent', () => {
  let component: JobmasterComponent;
  let fixture: ComponentFixture<JobmasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobmasterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JobmasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
