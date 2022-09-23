const slider = document.getElementById('rate');
const output = document.getElementById('display-rate');
var sliderValue = slider.value + '%';
output.innerHTML = sliderValue;

slider.oninput = function () {
  output.innerHTML = this.value;
};

function validatePrincipal(principal) {
  if (principal.length < 1) {
    alert('Principal blank.  Enter a positive number.');
  } else if (principal <= 0) {
    alert('Enter a positive number.');
  }
}

function calculateInterest(principal, rate, years) {
  return (principal * rate * years) / 100;
}

function calculateMaturity(years) {
  const d = new Date();
  const year = d.getFullYear();
  let yearInt = parseInt(years);
  return year + yearInt;
}

function displayValues(principal, rate, interest, maturity) {
  const showPrincipal = document.getElementById('show-principal');
  const showRate = document.getElementById('show-rate');
  const showInterest = document.getElementById('show-interest');
  const showMaturity = document.getElementById('show-maturity');

  showPrincipal.textContent = principal;
  showRate.textContent = rate;
  showInterest.textContent = interest;
  showMaturity.textContent = maturity;

  showPrincipal.classList.add('highlight');
  showRate.classList.add('highlight');
  showInterest.classList.add('highlight');
  showMaturity.classList.add('highlight');
}

function formValues() {
  const form = document.forms['calculator-form'];
  const principal = form['principal'].value;
  const rate = form['rate'].value;
  const years = form['years'].value;
  return [principal, rate, years];
}

function compute() {
  let [principal, rate, years] = formValues();
  validatePrincipal(principal);
  let interest = calculateInterest(principal, rate, years);
  let maturity = calculateMaturity(years);
  displayValues(principal, rate, interest, maturity);
}
