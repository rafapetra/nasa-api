import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import NasaService from './nasa-service.js';

function handleFormSubmission(event) {
  event.preventDefault();
  const startDate = document.querySelector('#startDate').value;
  const endDate = document.querySelector('#endDate').value;
  let promise = NasaService.getImage(startDate, endDate);
  promise.then(function(nasaDataArray) {
    printElements(nasaDataArray);
  }, function(errorArray) {
    printError(errorArray);
  });
}

function printElements(spaceData) {
  let images = spaceData;
  console.log(spaceData);

  images.map(function(image)  {
    let img = document.createElement('img');
    img.src = image.url;
    document.body.appendChild(img);
  });
}

function printError() {
  return "Error message";
}
window.addEventListener("load", function() {
  document.querySelector('form').addEventListener("submit", handleFormSubmission);
});