const expression = document.querySelector("#expression");
const buttons = document.querySelectorAll(".button");
const calculate = document.querySelector("#calculate");
const deleteCalculate = document.querySelector("#button_delete_calculate");

class Calculator {
    constructor() {
        this.firstValue = '';
        this.secondValue = '';
        this.expressionValues = [];
        this.operator = '';
    }

    expression() {
        buttons.forEach((button) => {
            button.addEventListener("click", () => {              

                const value = button.getAttribute("value");

                this.expressionValues.push(value);                  

                const operators = "+-/*";

                if (operators.includes(value)) {
                    this.operator = value;
                };

                if (this.expressionValues[0] == this.operator) {
                    this.expressionValues = [];
                    this.operator = '';
                    expression.textContent = '0';
                    return;
                }

                if (Number(this.expressionValues[0]) === 0) {
                    this.expressionValues = [Number(value)];
                }                   

                expression.textContent = this.expressionValues.join("");

            })
        })
    }

    calculate() {

        let calc = eval(this.expressionValues.join(""));

        expression.textContent = calc;

        if (isNaN(calc)) {
            expression.textContent = ''
            this.expressionValues = [];
            return;
        }

        this.expressionValues = [calc];

    }

    clear() {
        expression.textContent = '0';
        this.operator = '';
        this.expressionValues = [];
    }

}

const calculator = new Calculator();
calculator.expression();

calculate.addEventListener("click", () => {
    calculator.calculate();
})

deleteCalculate.addEventListener("click", () => {
    calculator.clear();
})