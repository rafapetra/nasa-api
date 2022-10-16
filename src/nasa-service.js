export default class NasaService {
  static getImage(startDate) {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      const url = `https://api.nasa.gov/planetary/apod?api_key=${process.env.API}&start_date=${startDate}&end_date=${finalDate}`;
      request.addEventListener("loadend", function() {
        const response = JSON.parse(this.responseText);
        console.log(response);
        if (this.status === 200) {
          resolve([response]);
        } else {
          reject([this, response]);
        }
      });
        request.open("GET", url, true);
        request.send();
    });
  }
}
        
        
        
        
     