import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import NasaService from './nasa-service.js';

function handleFormSubmission(event) {
  event.preventDefault();
  const startDate = document.querySelector('#startDate').value;
  let promise = NasaService.getImage(startDate);
  promise.then(function(nasaDataArray) {
    printElements(nasaDataArray);
  }, function(errorArray) {
    printError(errorArray);
  });
}

function printElements(data) {
  document.getElementById('showResponse').innerHTML = `${data}`;
}

window.addEventListener("load", function() {
  document.querySelector('form').addEventListener("submit", handleFormSubmission);
});