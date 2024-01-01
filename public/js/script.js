document.addEventListener('DOMContentLoaded', function () {
    const bmiForm = document.getElementById('bmiForm');
  
    bmiForm.addEventListener('submit', function (event) {
      const weight = parseFloat(bmiForm.elements['weight'].value);
      const height = parseFloat(bmiForm.elements['height'].value);
      const age = parseInt(bmiForm.elements['age'].value);
  
      if (isNaN(weight) || isNaN(height) || isNaN(age) || weight <= 0 || height <= 0 || age <= 0) {
        event.preventDefault();
        alert('Please enter valid values for weight, height, and age.');
      }
    });
    const bmiResult = document.getElementById('bmiResult').innerText;
    const categoryResult = document.getElementById('categoryResult').innerText;

    function getColorForCategory(category) {
        switch (category) {
            case 'Underweight':
                return 'blue';
            case 'Normal':
                return 'green';
            case 'Overweight':
                return 'red';
            default:
                return 'black';
        }
    }

    const bmiElement = document.getElementById('bmiResult');
    const categoryElement = document.getElementById('categoryResult');

    bmiElement.style.color = getColorForCategory(categoryResult);
    categoryElement.style.color = getColorForCategory(categoryResult);
  });

