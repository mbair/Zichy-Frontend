import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UIShellModule } from 'carbon-components-angular/ui-shell/ui-shell.module';

import { HeaderComponent } from './header.component';

TestBed.configureTestingModule({
  declarations: [HeaderComponent],
  imports: [UIShellModule]
});

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
