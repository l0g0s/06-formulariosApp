import { TestBed } from '@angular/core/testing';
import { AppComponent } from '../app.component';
import { LifecycleComponent } from './lifecycle.component';

describe('LifeCycleComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        LifecycleComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'lifecycle'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('lifecycle');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('lifecycle app is running!');
  });
});
