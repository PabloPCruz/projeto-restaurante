import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PresentationComponent } from './presentation';

describe('Presentation', () => {
  let component: PresentationComponent;
  let fixture: ComponentFixture<PresentationComponent>;

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      imports: [PresentationComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(PresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should open presentation'), () => {
    // triple A = AAA
    // Arrange = arruma tudo (ambiente) para testar o cenário especifico.
    // Act - Chamar um comportamento do component
    // Assert - Verificar se o comportamente obtido é o esperado.

    // ACT
    component.ngOnInit();

    // ASSERT 
    expect(component.ngOnInit())
  }

});
