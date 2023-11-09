
        import { ComponentFixture, TestBed } from '@angular/core/testing';
        import { FormsModule } from '@angular/forms';
        import { CalculatorComponent } from './calculator.component';
import { NO_ERRORS_SCHEMA } from '@angular/compiler';

        describe('CalculatorComponent', () => {
          let component: CalculatorComponent;
          let fixture: ComponentFixture<CalculatorComponent>;

          beforeEach(async () => {
            await TestBed.configureTestingModule({
              imports: [FormsModule],
              declarations: [CalculatorComponent],
              schemas:[NO_ERRORS_SCHEMA]
            }).compileComponents();
          });

          beforeEach(() => {
            fixture = TestBed.createComponent(CalculatorComponent);
            component = fixture.componentInstance;
            fixture.detectChanges();
          });

          it('should create', () => {
            expect(component).toBeTruthy();
          });

          it('should add two numbers', () => {
            component.num1 = 5;
            component.num2 = 10;
            component.add();
            expect(component.result).toBe(15);
          });

          it('should subtract two numbers', () => {
            component.num1 = 10;
            component.num2 = 5;
            component.subtract();
            expect(component.result).toBe(5);
          });

          it('should multiply two numbers', () => {
            component.num1 = 5;
            component.num2 = 10;
            component.multiply();
            expect(component.result).toBe(50);
          });

          it('should divide two numbers', () => {
            component.num1 = 10;
            component.num2 = 5;
            component.divide();
            expect(component.result).toBe(2);
          });
        });
      