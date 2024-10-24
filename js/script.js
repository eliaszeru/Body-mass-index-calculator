document.getElementById('bmi-form').addEventListener('submit', function(event) {
    event.preventDefault();

    let height = parseFloat(document.getElementById('height').value) / 100;  // Convert to meters
    let weight = parseFloat(document.getElementById('weight').value);
    let bmi = (weight / (height * height)).toFixed(2);

    document.getElementById('bmi-value').innerText = bmi;
    let advice = '';

    if (bmi < 18.5) {
        advice = 'You are underweight. It’s important to eat a nutritious diet and consult a healthcare provider if needed.';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        advice = 'You have a healthy weight. Keep up with your balanced diet and regular exercise!';
    } else if (bmi >= 25 && bmi < 29.9) {
        advice = 'You are overweight. Consider incorporating a healthy diet and exercise routine.';
    } else {
        advice = 'You are in the obese category. It is advisable to consult with a healthcare provider for guidance on weight management.';
    }

    document.getElementById('health-advice').innerText = advice;
    document.getElementById('result').classList.remove('hidden');
});