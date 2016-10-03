'use strict'

var months = ['Jan','Feb','Mar','Apr','Jun','Jul','Aug']
var monthsEl = document.getElementById('months');


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
  totalCustomers:[],
  totalCups:[],
  totalToGoPounds:[],
  totalPoundsNeeded: [],

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

getStrings: function() {
   for (var i = 0; i < hrs.length; i++) {
     this.strings.push(hrs[i] + ' ' + parseFloat((this.poundCupHrly[i] + this.toGoPoundsPerHour[i]).toFixed(2)) +
     'lbs [' + this.custPerHour[i].toFixed(2) + ' customers, ' + this.cupsPerHour[i].toFixed(2) + ' cups (' + this.poundCupHrly[i].toFixed(2) + ' lbs), ' + this.toGoPoundsPerHour[i].toFixed(2) + ' lbs to-go]');
   }
 },

getTotalCust: function() {
  this.totalCustomers.push('Total customers at ' + this.location + ': ' + this.custPerDay.toFixed(2));
},
getTotalCups: function() {
  this.totalCups.push('Total cups sold at ' + this.location + ': ' + this.cupsPerDay.toFixed(2));
},
getTotalToGoPounds: function() {
  this.totalToGoPounds.push('Total to-go pounds sold at ' + this.location + ': ' + this.toGoPoundsPerDay.toFixed(2));
},
getTotalPoundsNeeded: function() {
  this.totalPoundsNeeded.push('Total pounds of beans needed at ' + this.location + ': ' + this.dailyBeanPound.toFixed(2));
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
pike.getTotalCust();
pike.getTotalCups();
pike.getTotalToGoPounds();
pike.getTotalPoundsNeeded();

var capHill = {
  location: 'Capitol Hill',
  minCust: 12,
  maxCust: 28,
  avgCup: 3.2,
  avgPounds: 0.03,
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
  totalCustomers:[],
  totalCups:[],
  totalToGoPounds:[],
  totalPoundsNeeded: [],

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

getStrings: function() {
   for (var i = 0; i < hrs.length; i++) {
     this.strings.push(hrs[i] + ' ' + parseFloat((this.poundCupHrly[i] + this.toGoPoundsPerHour[i]).toFixed(2)) +
     'lbs [' + this.custPerHour[i].toFixed(2) + ' customers, ' + this.cupsPerHour[i].toFixed(2) + ' cups (' + this.poundCupHrly[i].toFixed(2) + ' lbs), ' + this.toGoPoundsPerHour[i].toFixed(2) + ' lbs to-go]');
   }
 },

getTotalCust: function() {
  this.totalCustomers.push('Total customers at ' + this.location + ': ' + this.custPerDay.toFixed(2));
},
getTotalCups: function() {
  this.totalCups.push('Total cups sold at ' + this.location + ': ' + this.cupsPerDay.toFixed(2));
},
getTotalToGoPounds: function() {
  this.totalToGoPounds.push('Total to-go pounds sold at ' + this.location + ': ' + this.toGoPoundsPerDay.toFixed(2));
},
getTotalPoundsNeeded: function() {
  this.totalPoundsNeeded.push('Total pounds of beans needed at ' + this.location + ': ' + this.dailyBeanPound.toFixed(2));
},
};

capHill.calcCustPerHour();
capHill.calcCupsPerHour();
capHill.getPounds();
capHill.getEmp();
capHill.calcPoundsCupHourly();
capHill.calcPoundCupDaily();
capHill.calcDailyBeanPound();
capHill.getStrings();
capHill.getTotalCust();
capHill.getTotalCups();
capHill.getTotalToGoPounds();
capHill.getTotalPoundsNeeded();

var seaPubLib = {
  location: 'Seattle Public Library',
  minCust: 9,
  maxCust: 45,
  avgCup: 2.6,
  avgPounds: 0.02,
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
  totalCustomers:[],
  totalCups:[],
  totalToGoPounds:[],
  totalPoundsNeeded: [],

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

getStrings: function() {
   for (var i = 0; i < hrs.length; i++) {
     this.strings.push(hrs[i] + ' ' + parseFloat((this.poundCupHrly[i] + this.toGoPoundsPerHour[i]).toFixed(2)) +
     'lbs [' + this.custPerHour[i].toFixed(2) + ' customers, ' + this.cupsPerHour[i].toFixed(2) + ' cups (' + this.poundCupHrly[i].toFixed(2) + ' lbs), ' + this.toGoPoundsPerHour[i].toFixed(2) + ' lbs to-go]');
   }
 },

getTotalCust: function() {
  this.totalCustomers.push('Total customers at ' + this.location + ': ' + this.custPerDay.toFixed(2));
},
getTotalCups: function() {
  this.totalCups.push('Total cups sold at ' + this.location + ': ' + this.cupsPerDay.toFixed(2));
},
getTotalToGoPounds: function() {
  this.totalToGoPounds.push('Total to-go pounds sold at ' + this.location + ': ' + this.toGoPoundsPerDay.toFixed(2));
},
getTotalPoundsNeeded: function() {
  this.totalPoundsNeeded.push('Total pounds of beans needed at ' + this.location + ': ' + this.dailyBeanPound.toFixed(2));
},
};

seaPubLib.calcCustPerHour();
seaPubLib.calcCupsPerHour();
seaPubLib.getPounds();
seaPubLib.getEmp();
seaPubLib.calcPoundsCupHourly();
seaPubLib.calcPoundCupDaily();
seaPubLib.calcDailyBeanPound();
seaPubLib.getStrings();
seaPubLib.getTotalCust();
seaPubLib.getTotalCups();
seaPubLib.getTotalToGoPounds();
seaPubLib.getTotalPoundsNeeded();

var southLakeUnion = {
  location: 'South Lake Union',
  minCust: 5,
  maxCust: 18,
  avgCup: 1.3,
  avgPounds: 0.04,
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
  totalCustomers:[],
  totalCups:[],
  totalToGoPounds:[],
  totalPoundsNeeded: [],

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

getStrings: function() {
   for (var i = 0; i < hrs.length; i++) {
     this.strings.push(hrs[i] + ' ' + parseFloat((this.poundCupHrly[i] + this.toGoPoundsPerHour[i]).toFixed(2)) +
     'lbs [' + this.custPerHour[i].toFixed(2) + ' customers, ' + this.cupsPerHour[i].toFixed(2) + ' cups (' + this.poundCupHrly[i].toFixed(2) + ' lbs), ' + this.toGoPoundsPerHour[i].toFixed(2) + ' lbs to-go]');
   }
 },

getTotalCust: function() {
  this.totalCustomers.push('Total customers at ' + this.location + ': ' + this.custPerDay.toFixed(2));
},
getTotalCups: function() {
  this.totalCups.push('Total cups sold at ' + this.location + ': ' + this.cupsPerDay.toFixed(2));
},
getTotalToGoPounds: function() {
  this.totalToGoPounds.push('Total to-go pounds sold at ' + this.location + ': ' + this.toGoPoundsPerDay.toFixed(2));
},
getTotalPoundsNeeded: function() {
  this.totalPoundsNeeded.push('Total pounds of beans needed at ' + this.location + ': ' + this.dailyBeanPound.toFixed(2));
},
};

southLakeUnion.calcCustPerHour();
southLakeUnion.calcCupsPerHour();
southLakeUnion.getPounds();
southLakeUnion.getEmp();
southLakeUnion.calcPoundsCupHourly();
southLakeUnion.calcPoundCupDaily();
southLakeUnion.calcDailyBeanPound();
southLakeUnion.getStrings();
southLakeUnion.getTotalCust();
southLakeUnion.getTotalCups();
southLakeUnion.getTotalToGoPounds();
southLakeUnion.getTotalPoundsNeeded();

var seaTac = {
  location: 'Sea-Tac Airport',
  minCust: 28,
  maxCust: 44,
  avgCup: 1.1,
  avgPounds: 0.41,
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
  totalCustomers:[],
  totalCups:[],
  totalToGoPounds:[],
  totalPoundsNeeded:[],
  totalToGoPounds:[],
  totalPoundsNeeded: [],

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

getStrings: function() {
   for (var i = 0; i < hrs.length; i++) {
     this.strings.push(hrs[i] + ' ' + parseFloat((this.poundCupHrly[i] + this.toGoPoundsPerHour[i]).toFixed(2)) +
     'lbs [' + this.custPerHour[i].toFixed(2) + ' customers, ' + this.cupsPerHour[i].toFixed(2) + ' cups (' + this.poundCupHrly[i].toFixed(2) + ' lbs), ' + this.toGoPoundsPerHour[i].toFixed(2) + ' lbs to-go]');
   }
 },

getTotalCust: function() {
  this.totalCustomers.push('Total customers at ' + this.location + ': ' + this.custPerDay.toFixed(2));
},
getTotalCups: function() {
  this.totalCups.push('Total cups sold at ' + this.location + ': ' + this.cupsPerDay.toFixed(2));
},
getTotalToGoPounds: function() {
  this.totalToGoPounds.push('Total to-go pounds sold at ' + this.location + ': ' + this.toGoPoundsPerDay.toFixed(2));
},
getTotalPoundsNeeded: function() {
  this.totalPoundsNeeded.push('Total pounds of beans needed at ' + this.location + ': ' + this.dailyBeanPound.toFixed(2));
},
};

seaTac.calcCustPerHour();
seaTac.calcCupsPerHour();
seaTac.getPounds();
seaTac.getEmp();
seaTac.calcPoundsCupHourly();
seaTac.calcPoundCupDaily();
seaTac.calcDailyBeanPound();
seaTac.getStrings();
seaTac.getTotalCust();
seaTac.getTotalCups();
seaTac.getTotalToGoPounds();
seaTac.getTotalPoundsNeeded();
