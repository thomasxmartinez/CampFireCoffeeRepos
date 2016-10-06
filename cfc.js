'use strict'

var hrs = ['6:00AM','7:00AM','8:00AM','9:00AM','10:00AM','11:00AM','12:00PM','1:00PM','2:00PM','3:00PM','4:00PM','5:00PM','6:00PM','7:00PM','8:00PM']

var allStores = [];

function Stores(location, minCust , maxCust, avgCup, avgPounds) {
  this.location = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCup = avgCup;
  this.avgPounds = avgPounds;
  this.custPerHour = [];
  this.custPerDay = 0;
  this.cupsPerHour = [];
  this.cupsPerDay = 0;
  this.toGoPoundsPerHour = [];
  this.toGoPoundsPerDay = 0;
  this.poundCupHrly = [];
  this.poundCupDaily = 0;
  this.dailyBeanPound = 0;
  this.hrlyBeanPound = [];
  this.empPerHr = [];
  this.empPerDay = 0;
  this.strings = [];
  this.totalCustomers = [];
  this.totalCups = [];
  this.totalToGoPounds = [];
  this.totalPoundsNeeded = [];
  allStores.push(this);
}

Stores.prototype.getRando = function(min,max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
Stores.prototype.calcCustPerHour = function() {
  for (var i = 0; i < hrs.length; i++) {
    this.custPerHour.push(this.getRando(this.minCust, this.maxCust));
    this.custPerDay += this.custPerHour[i];
  }
};
Stores.prototype.calcCupsPerHour = function() {
  for (var i = 0; i < hrs.length; i++) {
    this.cupsPerHour.push(this.custPerHour[i] * this.avgCup);
    this.cupsPerDay += this.cupsPerHour[i];
  }
};
Stores.prototype.getPounds = function() {
  for (var i =0;i < hrs.length; i++) {
    this.toGoPoundsPerHour.push(this.custPerHour[i] * this.avgPounds);
    this.toGoPoundsPerDay += this.toGoPoundsPerHour[i];
  }
};
Stores.prototype.getEmp = function() {
  for (var i = 0; i < hrs.length; i++) {
    this.empPerHr.push(Math.ceil(this.custPerHour[i] / 30));
    this.empPerDay += this.empPerHr[i];
     }
};
Stores.prototype.calcPoundsCupHourly = function() {
  for (var i = 0; i < hrs.length; i++) {
    this.poundCupHrly.push(Math.ceil(this.cupsPerHour[i] / 16));
    this.poundCupDaily += this.poundCupHrly[i];
  }
};
Stores.prototype.calcDailyBeanPound = function() {
  for (var i = 0; i < hrs.length; i++) {
    this.hrlyBeanPound.push(this.poundCupHrly[i] + this.toGoPoundsPerHour[i]);
    this.dailyBeanPound += this.hrlyBeanPound[i];
  }
};

Stores.prototype.getStrings = function() {
   for (var i = 0; i < hrs.length; i++) {
     this.strings.push(hrs[i] + ' ' + parseFloat((this.poundCupHrly[i] + this.toGoPoundsPerHour[i]).toFixed(2)) +
     'lbs [' + this.custPerHour[i].toFixed(2) + ' customers, ' + this.cupsPerHour[i].toFixed(2) + ' cups (' + this.poundCupHrly[i].toFixed(2) + ' lbs), ' + this.toGoPoundsPerHour[i].toFixed(2) + ' lbs to-go]');
   }
 };

Stores.prototype.getTotalCust = function() {
  this.totalCustomers.push('Total customers at ' + this.location + ': ' + this.custPerDay.toFixed(2));
};
Stores.prototype.getTotalCups = function() {
  this.totalCups.push('Total cups sold at ' + this.location + ': ' + this.cupsPerDay.toFixed(2));
};
Stores.prototype.getTotalToGoPounds = function() {
  this.totalToGoPounds.push('Total to-go pounds sold at ' + this.location + ': ' + this.toGoPoundsPerDay.toFixed(2));
};
Stores.prototype.getTotalPoundsNeeded = function() {
  this.totalPoundsNeeded.push('Total pounds of beans needed at ' + this.location + ': ' + this.dailyBeanPound.toFixed(2));
};

Stores.prototype.callMethods = function() {
  this.getRando();
  this.calcCustPerHour();
  this.calcCupsPerHour();
  this.getPounds();
  this.getEmp();
  this.calcPoundsCupHourly();
  this.calcDailyBeanPound();
  this.getStrings();
  this.getTotalCust();
  this.getTotalCups();
  this.getTotalToGoPounds();
  this.getTotalPoundsNeeded();

};

new Stores('Pike Place Market', 14, 35, 1.2, 0.34);
new Stores('Capitol Hill', 12, 28, 3.2, 0.03);
new Stores('Seattle Public Library', 9, 45, 2.6, 0.02);
new Stores('South Lake Union', 5, 18, 1.3, 0.04);
new Stores('Sea-Tac Airport', 28, 44, 1.1, 0.41);


function makeAllStores() {
  for (var i = 0; i < allStores.length; i++) {

    allStores[i].callMethods();
  }
}

makeAllStores();

//get reference to table element
var tableEl = document.getElementById('tableSauce');

function makeRow(obj) {

  //make a row
  var rowEl = document.createElement('tr');

  //REPEAT THIS PART
    //make a cell
  var nameCell = document.createElement('td');
    //give content to cell
  nameCell.textContent = obj.location;
    //append cell to the row
  rowEl.appendChild(nameCell);

  // var priceCell = document.createElement('td');
  // priceCell.textContent = obj.price;
  // rowEl.appendChild(priceCell);
  var totalBeanCell = document.createElement('td');
  totalBeanCell.textContent = obj.dailyBeanPound.toFixed(1);
  rowEl.appendChild(totalBeanCell);

for (var i = 0; i < obj.hrlyBeanPound.length; i++) {
  var hourlyCell = document.createElement('td');
  hourlyCell.textContent = obj.hrlyBeanPound[i].toFixed(1);
  rowEl.appendChild(hourlyCell);
}


  tableEl.appendChild(rowEl);
}



var callRows = function () {
  for (var i = 0; i < allStores.length; i++) {
    makeRow(allStores[i]);
  }
};
callRows();
//everything looks right to me except for the code block in the for loop
//when you set up the function you gave it a parameter (obj)
//i think that code block in the loop should be
