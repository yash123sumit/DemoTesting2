
        import { Component } from '@angular/core';

        @Component({
          selector: 'app-calculator',
          templateUrl: './calculator.component.html',
          styleUrls: ['./calculator.component.css']
        })
        export class CalculatorComponent {
          num1!: number;
          num2!: number;
          result!: number;

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
      