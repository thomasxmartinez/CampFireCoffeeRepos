'use strict'

var hrs = ['6:00AM','7:00AM','8:00AM','9:00AM','10:00AM','11:00AM','12:00PM','1:00PM','2:00PM','3:00PM','4:00PM','5:00PM','6:00','7:00PM','8:00PM']

var pike = {
  location: 'Pike Place Market',
  minCust: 14,
  maxCust: 35,
  avgCup: 1.2,
  avgPounds: 0.34,
  custPerHour: [],
  custPerDay: 0,
  cupsPerHour: [],
  cupsPerDay:0,
  toGoPoundsPerHour:[],
  toGoPoundsPerDay:0,
  poundCupHrly:[],
  poundCupDaily:0,
  dailyBeanPound:0,
  hrlyBeanPound: [],
  empPerHr: [],
  empPerDay:0,
  strings:[],

getRando: function(min,max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
},
calcCustPerHour: function() {
  for (var i = 0; i < hrs.length; i++) {
    this.custPerHour.push(this.getRando(this.minCust, this.maxCust));
    this.custPerDay += this.custPerHour[i];
  }
},
calcCupsPerHour: function() {
  for (var i = 0; i < hrs.length; i++) {
    this.cupsPerHour.push(this.custPerHour[i] * this.avgCup);
    this.cupsPerDay += this.cupsPerHour[i];
  }
},
getPounds: function() {
  for (var i =0;i < hrs.length; i++) {
    this.toGoPoundsPerHour.push(this.custPerHour[i] * this.avgPounds);
    this.toGoPoundsPerDay += this.toGoPoundsPerHour[i];
  }
},
getEmp: function() {
  for (var i = 0; i < hrs.length; i++) {
    this.empPerHr.push(Math.ceil(this.custPerHour[i] / 30));
    this.empPerDay += this.empPerHr[i];
     }
   },
calcPoundsCupHourly: function() {
  for (var i = 0; i < hrs.length; i++) {
    this.poundCupHrly.push(Math.ceil(this.cupsPerHour[i] / 16));
  }
},
calcPoundCupDaily: function() {
  for (var i = 0; i < hrs.length; i++) {
    this.poundCupDaily += this.poundCupHrly[i];
  }
},
calcDailyBeanPound: function() {
  this.dailyBeanPound = (this.poundCupDaily + this.toGoPoundsPerDay);
},

getStrings: function () {
   for (var i = 0; i < hrs.length; i++) {
     this.strings.push(hrs[i] + ' ' + parseFloat((this.poundCupHrly[i] + this.toGoPoundsPerHour[i]).toFixed(2)) +
     'lbs [' + this.custPerHour[i].toFixed(2) + ' customers, ' + this.cupsPerHour[i].toFixed(2) + ' cups (' + this.poundCupHrly[i].toFixed(2) + ' lbs), ' + this.toGoPoundsPerHour[i].toFixed(2) + 'lbs to-go');
   }
 },
};



pike.calcCustPerHour();
pike.calcCupsPerHour();
pike.getPounds();
pike.getEmp();
pike.calcPoundsCupHourly();
pike.calcPoundCupDaily();
pike.calcDailyBeanPound();
pike.getStrings();
