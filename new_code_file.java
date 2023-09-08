<HashMap><app.component.html><app-calculator></app-calculator>

<!-- <div class="content">
        <span>calculator app is running!</span>
</div> --></app.component.html><app.component.spec.ts>import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { FormsModule } from '@angular/forms';
import { NO_ERRORS_SCHEMA } from '@angular/compiler';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [
        AppComponent,
        CalculatorComponent
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'calculator'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('calculator-app');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('calculator app is running!');
  });
});
</app.component.spec.ts><calculator.component.ts>
        import { Component } from '@angular/core';

        @Component({
          selector: 'app-calculator',
          templateUrl: './calculator.component.html',
          styleUrls: ['./calculator.component.css']
        })
        export class CalculatorComponent {
          num1: number=0;
          num2: number=0;
          result: number=0;

          add() {
            this.result = this.num1 + this.num2;
          }

          subtract() {
            this.result = this.num1 - this.num2;
          }

          multiply() {
            this.result = this.num1 * this.num2;
          }

          divide() {
            this.result = this.num1 / this.num2;
          }
        }
      </calculator.component.ts><calculator.component.css></calculator.component.css><calculator.component.html>
        <div>
          <h1>Calculator</h1>
          <input type="number" [(ngModel)]="num1" placeholder="Enter number 1">
          <input type="number" [(ngModel)]="num2" placeholder="Enter number 2">
          <br>
          <button (click)="add()">Add</button>
          <button (click)="subtract()">Subtract</button>
          <button (click)="multiply()">Multiply</button>
          <button (click)="divide()">Divide</button>
          <br>
          Result: {{ result }}
        </div>
      </calculator.component.html><calculator.component.spec.ts>import { ComponentFixture, TestBed } from '@angular/core/testing';
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
      schemas: [NO_ERRORS_SCHEMA]
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
</calculator.component.spec.ts><app.component.ts>
        import { Component } from '@angular/core';

        @Component({
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        })
        export class AppComponent {
          title = 'calculator-app';
        }
      </app.component.ts><app.component.css>
        /* Add any custom styles here */
      </app.component.css><app.module.ts>
        import { NgModule } from '@angular/core';
        import { BrowserModule } from '@angular/platform-browser';
        import { FormsModule } from '@angular/forms';

        import { AppComponent } from './app.component';
        import { CalculatorComponent } from './calculator/calculator.component';

        @NgModule({
          declarations: [
            AppComponent,
            CalculatorComponent
          ],
          imports: [
            BrowserModule,
            FormsModule
          ],
          providers: [],
          bootstrap: [AppComponent]
        })
        export class AppModule { }
      </app.module.ts></HashMap>