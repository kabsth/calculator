let display = document.getElementById('display');
let buttons = document.querySelectorAll('.button');

let calculator = {
  displayValue: '',
  firstOperand: null,
  secondOperand: null,
  operator: null,
  memory: 0,

  handleButtonPress: function(buttonValue) {
    if (buttonValue === '=') {
      this.calculate();
    } else if (buttonValue === 'C') {
      this.clear();
    } else if (buttonValue === 'MC') {
      this.memoryClear();
    } else if (buttonValue === 'MR') {
      this.memoryRecall();
    } else if (buttonValue === 'M+') {
      this.memoryAdd();
    } else if (buttonValue === 'M-') {
      this.memorySubtract();
    } else if (isNaN(buttonValue)) {
      this.setOperator(buttonValue);
    } else {
      this.appendDisplayValue(buttonValue);
    }
  },

  appendDisplayValue: function(value) {
    this.displayValue += value;
    display.value = this.displayValue;
  },

  setOperator: function(operator) {
    this.operator = operator;
    this.firstOperand = parseFloat(this.displayValue);
    this.displayValue = '';
  },

  calculate: function() {
    this.secondOperand = parseFloat(this.displayValue);
    let result = 0;

    switch (this.operator) {
      case '+':
        result = this.firstOperand + this.secondOperand;
        break;
      case '-':
        result = this.firstOperand - this.secondOperand;
        break;
      case '*':
        result = this.firstOperand * this.secondOperand;
        break;
      case '/':
        result = this.firstOperand / this.secondOperand;
        break;
      case '^':
        result = Math.pow(this.firstOperand, this.secondOperand);
        break;
      case '√':
        result = Math.sqrt(this.secondOperand);
        break;
      case 'sin':
        result = Math.sin(this.secondOperand * Math.PI / 180);
        break;
      case 'cos':
        result = Math.cos(this.secondOperand * Math.PI / 180);
        break;
      case 'tan':
        result = Math.tan(this.secondOperand * Math.PI / 180);
        break;
      case 'log':
        result = Math.log10(this.secondOperand);
        break;
      case 'ln':
        result = Math.log(this.secondOperand);
        break;
    }

    this.displayValue = result.toString();
    display.value = this.displayValue;
  },

  clear: function() {
    this.displayValue = '';
    this.firstOperand = null;
    this.secondOperand = null;
    this.operator = null;
    display.value = '';
  },

  memoryClear: function() {
    this.memory = 0;
  },

  memoryRecall: function() {
    this.displayValue = this.memory.toString();
    display.value = this.displayValue;
  },

  memoryAdd: function() {
    this.memory += parseFloat(this.displayValue);
    this.displayValue = '';
  },

  memorySubtract: function() {
    this.memory -= parseFloat(this.displayValue);
    this.displayValue = '';
  }
};

buttons.forEach(button => {
  button.addEventListener('click', () => {
    calculator.handleButtonPress(button.value);
  });
});
