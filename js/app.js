'use strict';


let SalmonCookies = document.getElementById('SalmonCookies');
let seattle = {
  cityName: 'Seattle',
  max: 65,
  min: 23 ,
  avg: 6.3,
  hour: ['6am', '7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
  results:[],
  Total:0,
  getRanCoustmer:function() {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },
  getRanPerHour:function(){
    let totalCookies=0;
    for(let i=0;i<this.hour.length;i++){
      Math.floor( this.results.push(this.avg*this.getRanCoustmer()));
      totalCookies+= this.avg*this.getRanCoustmer();
      this.Total=totalCookies;
    }
  },
  render: function() {
    let articleElement = document.createElement('article');
    SalmonCookies.appendChild(articleElement);
    let nameTitle = document.createElement('h2');
    articleElement.appendChild(nameTitle);
    nameTitle.textContent = this.cityName;
    let salesList = document.createElement('ul');
    SalmonCookies.appendChild(salesList);
    for(let i = 0; i < this.hour.length; i++) {
      let listItem = document.createElement('li');
      salesList.appendChild(listItem);
      listItem.textContent = `${ this.hour[i]},${Math.floor(this.results[i])} cookies`;
    }
    let listItem = document.createElement('li');
    salesList.appendChild(listItem);
    listItem.textContent = `Total ${Math.ceil (this.Total)} cookies`;
  }
};
seattle.getRanCoustmer();
seattle.getRanPerHour();
seattle.render();








let tokyo = {
  cityName: 'Tokyo',
  max: 	24,
  min: 3 ,
  avg: 1.2,
  hour: ['6am', '7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
  results:[],
  Total:0,
  getRanCoustmer:function() {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },
  getRanPerHour:function(){
    let totalCookies=0;
    for(let i=0;i<this.hour.length;i++){
      Math.floor( this.results.push(this.avg*this.getRanCoustmer()));
      totalCookies+= this.avg*this.getRanCoustmer();
      this.Total=totalCookies;
    }
  },
  render: function() {
    let articleElement = document.createElement('article');
    SalmonCookies.appendChild(articleElement);
    let nameTitle = document.createElement('h2');
    articleElement.appendChild(nameTitle);
    nameTitle.textContent = this.cityName;
    let salesList = document.createElement('ul');
    articleElement.appendChild(salesList);
    for(let i = 0; i < this.hour.length; i++) {
      let listItem = document.createElement('li');
      salesList.appendChild(listItem);
      listItem.textContent = `${ this.hour[i]},${Math.floor(this.results[i])} cookies`;
    }
    let listItem = document.createElement('li');
    salesList.appendChild(listItem);
    listItem.textContent = `Total ${Math.ceil (this.Total)} cookies`;
  }
};
tokyo.getRanCoustmer();
tokyo.getRanPerHour();
tokyo.render();





let dubai = {
  cityName: 'Dubai',
  max: 		38,
  min: 11 ,
  avg: 3.7,
  hour: ['6am', '7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
  results:[],
  Total:0,
  getRanCoustmer:function() {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },
  getRanPerHour:function(){
    let totalCookies=0;
    for(let i=0;i<this.hour.length;i++){
      Math.floor( this.results.push(this.avg*this.getRanCoustmer()));
      totalCookies+= this.avg*this.getRanCoustmer();
      this.Total=totalCookies;
    }
  },
  render: function() {
    let articleElement = document.createElement('article');
    SalmonCookies.appendChild(articleElement);
    let nameTitle = document.createElement('h2');
    articleElement.appendChild(nameTitle);
    nameTitle.textContent = this.cityName;
    let salesList = document.createElement('ul');
    articleElement.appendChild(salesList);
    for(let i = 0; i < this.hour.length; i++) {
      let listItem = document.createElement('li');
      salesList.appendChild(listItem);
      listItem.textContent = `${ this.hour[i]},${Math.floor(this.results[i])} cookies`;
    }
    let listItem = document.createElement('li');
    salesList.appendChild(listItem);
    listItem.textContent = `Total ${Math.ceil (this.Total)} cookies`;
  }
};
dubai.getRanCoustmer();
dubai.getRanPerHour();
dubai.render();





let paris = {
  cityName: 'Paris',
  max: 38,
  min: 20 ,
  avg: 2.3,
  hour: ['6am', '7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
  results:[],
  Total:0,
  getRanCoustmer:function() {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },
  getRanPerHour:function(){
    let totalCookies=0;
    for(let i=0;i<this.hour.length;i++){
      Math.floor( this.results.push(this.avg*this.getRanCoustmer()));
      totalCookies+= this.avg*this.getRanCoustmer();
      this.Total=totalCookies;
    }
  },
  render: function() {
    let articleElement = document.createElement('article');
    SalmonCookies.appendChild(articleElement);
    let nameTitle = document.createElement('h2');
    articleElement.appendChild(nameTitle);
    nameTitle.textContent = this.cityName;
    let salesList = document.createElement('ul');
    articleElement.appendChild(salesList);
    for(let i = 0; i < this.hour.length; i++) {
      let listItem = document.createElement('li');
      salesList.appendChild(listItem);
      listItem.textContent = `${ this.hour[i]},${Math.floor(this.results[i])} cookies`;
    }
    let listItem = document.createElement('li');
    salesList.appendChild(listItem);
    listItem.textContent = `Total ${Math.ceil (this.Total)} cookies`;
  }
};
paris.getRanCoustmer();
paris.getRanPerHour();
paris.render();





let lima = {
  cityName: 'Lima',
  max: 16,
  min: 2,
  avg: 4.6,
  hour: ['6am', '7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
  results:[],
  Total:0,
  getRanCoustmer:function() {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },
  getRanPerHour:function(){
    let totalCookies=0;
    for(let i=0;i<this.hour.length;i++){
      Math.floor( this.results.push(this.avg*this.getRanCoustmer()));
      totalCookies+= this.avg*this.getRanCoustmer();
      this.Total=totalCookies;
    }
  },
  render: function() {
    let articleElement = document.createElement('article');
    SalmonCookies.appendChild(articleElement);
    let nameTitle = document.createElement('h2');
    articleElement.appendChild(nameTitle);
    nameTitle.textContent = this.cityName;
    let salesList = document.createElement('ul');
    articleElement.appendChild(salesList);
    for(let i = 0; i < this.hour.length; i++) {
      let listItem = document.createElement('li');
      salesList.appendChild(listItem);
      listItem.textContent = `${ this.hour[i]},${Math.floor(this.results[i])} cookies`;
    }
    let listItem = document.createElement('li');
    salesList.appendChild(listItem);
    listItem.textContent = `Total ${Math.ceil (this.Total)} cookies`;
  }
};
lima.getRanCoustmer();
lima.getRanPerHour();
lima.render();








