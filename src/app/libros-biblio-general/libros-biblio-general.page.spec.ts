import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LibrosBiblioGeneralPage } from './libros-biblio-general.page';

describe('LibrosBiblioGeneralPage', () => {
  let component: LibrosBiblioGeneralPage;
  let fixture: ComponentFixture<LibrosBiblioGeneralPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LibrosBiblioGeneralPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LibrosBiblioGeneralPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
