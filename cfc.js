'use strict'

var hrs = ['6:00AM','7:00AM','8:00AM','9:00AM','10:00AM','11:00AM','12:00PM','1:00PM','2:00PM','3:00PM','4:00PM','5:00PM','6:00','7:00PM','8:00PM']

var pike = {
  location: 'Pike Place Market',
  minCust: 14,
  maxCust: 35,
  avgCup: 1.2,
  avgPounds: 0.34,
  custPerHour: [],
  custPerDay: 0,var round = function(num, prec){
   return parseFloat(num.toFixed(prec));
  };  cupsPerHour: [],
  cupsPerDay:0,
  poundsPerHr:[],
  poundsPerDay:0,
  empPerHr: [],
  empPerDay:0,

getRando: function(min,max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
},
getCust: function() {
  for (var i = 0; i < hrs.length; i++) {
    this.custPerHour.push(this.getRando(this.minCust, this.maxCust));
    this.custPerDay += this.custPerHour[i];
  }
},
getCups: function() {
  for (var i = 0; i < hrs.length; i++) {
    this.cupsPerHour.push(this.custPerHour[i] * this.avgCups);
    this.cupsPerDay += this.cupsPerHour[i];
  }
},
getPounds: function() {
  for (var i =0;i < hrs.length; i++) {
    this.poundsPerHr.push(this.custPerHour[i] * this.avgPounds);
    this.poundsPerDay += this.poundsPerHr[i];
  }
},
getEmp: function() {
  for (var i = 0; i < hrs.length; i++) {
    this.empPerHr.push(Math.ceil(this.custPerHour[i] / 30));
    this.empPerDay += this.empPerHr[i];
     }
   }
}
pike.getCust();
pike.getCups();
pike.getPounds();
pike.getEmp();

var capHill = {
  location: 'Pike Place Market',
  minCust: 12,
  maxCust: 28,
  avgCup: 3.2,
  avgPounds: 0.03,
  custPerHour: [],
  custPerDay: 0,var round = function(num, prec){
   return parseFloat(num.toFixed(prec));
  };  cupsPerHour: [],
  cupsPerDay:0,
  poundsPerHr:[],
  poundsPerDay:0,
  empPerHr: [],
  empPerDay:0,

getRando: function(min,max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
},
getCust: function() {
  for (var i = 0; i < hrs.length; i++) {
    this.custPerHour.push(this.getRando(this.minCust, this.maxCust));
    this.custPerDay += this.custPerHour[i];
  }
},
getCups: function() {
  for (var i = 0; i < hrs.length; i++) {
    this.cupsPerHour.push(this.custPerHour[i] * this.avgCups);
    this.cupsPerDay += this.cupsPerHour[i];
  }
},
getPounds: function() {
  for (var i =0;i < hrs.length; i++) {
    this.poundsPerHr.push(this.custPerHour[i] * this.avgPounds);
    this.poundsPerDay += this.poundsPerHr[i];
  }
},
getEmp: function() {
  for (var i = 0; i < hrs.length; i++) {
    this.empPerHr.push(Math.ceil(this.custPerHour[i] / 30));
    this.empPerDay += this.empPerHr[i];
     }
   }
}
capHill.getCust();
capHill.getCups();
capHill.getPounds();
capHill.getEmp();

var seaPubLib = {
  location: 'Pike Place Market',
  minCust: 9,
  maxCust: 45,
  avgCup: 2.6,
  avgPounds: 0.02,
  custPerHour: [],
  custPerDay: 0,var round = function(num, prec){
   return parseFloat(num.toFixed(prec));
  };  cupsPerHour: [],
  cupsPerDay:0,
  poundsPerHr:[],
  poundsPerDay:0,
  empPerHr: [],
  empPerDay:0,

getRando: function(min,max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
},
getCust: function() {
  for (var i = 0; i < hrs.length; i++) {
    this.custPerHour.push(this.getRando(this.minCust, this.maxCust));
    this.custPerDay += this.custPerHour[i];
  }
},
getCups: function() {
  for (var i = 0; i < hrs.length; i++) {
    this.cupsPerHour.push(this.custPerHour[i] * this.avgCups);
    this.cupsPerDay += this.cupsPerHour[i];
  }
},
getPounds: function() {
  for (var i =0;i < hrs.length; i++) {
    this.poundsPerHr.push(this.custPerHour[i] * this.avgPounds);
    this.poundsPerDay += this.poundsPerHr[i];
  }
},
getEmp: function() {
  for (var i = 0; i < hrs.length; i++) {
    this.empPerHr.push(Math.ceil(this.custPerHour[i] / 30));
    this.empPerDay += this.empPerHr[i];
     }
   }
}
seaPubLib.getCust();
seaPubLib.getCups();
seaPubLib.getPounds();
seaPubLib.getEmp();

var southLakeUnion = {
  location: 'Pike Place Market',
  minCust: 5,
  maxCust: 18,
  avgCup: 1.3,
  avgPounds: 0.04,
  custPerHour: [],
  custPerDay: 0,var round = function(num, prec){
   return parseFloat(num.toFixed(prec));
  };  cupsPerHour: [],
  cupsPerDay:0,
  poundsPerHr:[],
  poundsPerDay:0,
  empPerHr: [],
  empPerDay:0,

getRando: function(min,max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
},
getCust: function() {
  for (var i = 0; i < hrs.length; i++) {
    this.custPerHour.push(this.getRando(this.minCust, this.maxCust));
    this.custPerDay += this.custPerHour[i];
  }
},
getCups: function() {
  for (var i = 0; i < hrs.length; i++) {
    this.cupsPerHour.push(this.custPerHour[i] * this.avgCups);
    this.cupsPerDay += this.cupsPerHour[i];
  }
},
getPounds: function() {
  for (var i =0;i < hrs.length; i++) {
    this.poundsPerHr.push(this.custPerHour[i] * this.avgPounds);
    this.poundsPerDay += this.poundsPerHr[i];
  }
},
getEmp: function() {
  for (var i = 0; i < hrs.length; i++) {
    this.empPerHr.push(Math.ceil(this.custPerHour[i] / 30));
    this.empPerDay += this.empPerHr[i];
     }
   }
}
southLakeUnion.getCust();
southLakeUnion.getCups();
southLakeUnion.getPounds();
southLakeUnion.getEmp();
