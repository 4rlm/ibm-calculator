var slider = document.getElementById('rate');
var output = document.getElementById('display-rate');
var sliderValue = slider.value + '%';
output.innerHTML = sliderValue;

slider.oninput = function () {
  output.innerHTML = this.value;
};

function compute() {
  var form = document.forms['calculator-form'];
  var principal = form['principal'].value;
  var rate = form['rate'].value;
  var years = form['years'].value;

  if (principal.length < 1) {
    alert('Principal blank.  Enter a positive number.');
  } else if (principal <= 0) {
    alert('Enter a positive number.');
  }

  var interest = (principal * rate * years) / 100;

  const d = new Date();
  let year = d.getFullYear();
  let yearInt = parseInt(years);
  var maturity = year + yearInt;

  var showPrincipal = document.getElementById('show-principal');
  var displayRate = document.getElementById('display-rate');
  var showRate = document.getElementById('show-rate');
  var showInterest = document.getElementById('show-interest');
  var showMaturity = document.getElementById('show-maturity');

  showPrincipal.textContent = principal;
  showRate.textContent = rate;
  displayRate.textContent = rate;
  showInterest.textContent = interest;
  showMaturity.textContent = maturity;

  showPrincipal.classList.add('highlight');
  showRate.classList.add('highlight');
  showInterest.classList.add('highlight');
  showMaturity.classList.add('highlight');
}
