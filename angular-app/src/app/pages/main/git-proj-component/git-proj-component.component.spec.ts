import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GitProjComponentComponent } from './git-proj-component.component';

describe('GitProjComponentComponent', () => {
  let component: GitProjComponentComponent;
  let fixture: ComponentFixture<GitProjComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GitProjComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GitProjComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
