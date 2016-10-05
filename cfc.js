'use strict'

var hrs = ['6:00AM','7:00AM','8:00AM','9:00AM','10:00AM','11:00AM','12:00PM','1:00PM','2:00PM','3:00PM','4:00PM','5:00PM','6:00PM','7:00PM','8:00PM']

var allStores = [];

function Stores(location, minCust , maxCust, avgCup, avgPounds) {
  this.custPerHour: [],
  this.custPerDay: 0,
  this.cupsPerHour: [],
  this.cupsPerDay:0,
  this.toGoPoundsPerHour:[],
  this.toGoPoundsPerDay:0,
  this.poundCupHrly:[],
  this.poundCupDaily:0,
  this.dailyBeanPound:0,
  this.hrlyBeanPound: [],
  this.empPerHr: [],
  this.empPerDay:0,
  this.strings:[],
  this.totalCustomers:[],
  this.totalCups:[],
  this.totalToGoPounds:[],
  this.totalPoundsNeeded: [],
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
  }
};
Stores.prototype.calcPoundCupDaily = function() {
  for (var i = 0; i < hrs.length; i++) {
    this.poundCupDaily += this.poundCupHrly[i];
  }
};
Stores.prototype.calcDailyBeanPound = function() {
  this.dailyBeanPound = (this.poundCupDaily + this.toGoPoundsPerDay);
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

new Stores('Pike Place Market', 14, 35, 1.2, 0.34);
new Stores('Capitol Hill', 12, 28, 3.2, 0.03);
new Stores('Seattle Public Library', 9, 45, 2.6, 0.02);
new Stores('South Lake Union', 5, 18, 1.3, 0.04);
new Stores('Sea-Tac Airport', 28, 44, 1.1, 0.41);


function makeAllTheThings() {
  for (var i = 0; i < allStores.length; i++) {
    allStores[i].doAllTheMethods();
  }
}
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

var pikePlaceUl = document.getElementById('pikePlaceList');
var ulEl = document.createElement('ul');

for (var i = 0; i < pike.strings.length; i++) {
  var liEl = document.createElement('li');
  liEl.textContent = pike.strings[i];
  ulEl.appendChild(liEl);
}
pikePlaceUl.appendChild(ulEl);

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

var capHillUl = document.getElementById('capHillList');
var ulEl = document.createElement('ul');

for (var i = 0; i < capHill.strings.length; i++) {
  var liEl = document.createElement('li');
  liEl.textContent = capHill.strings[i];
  ulEl.appendChild(liEl);
}
capHillUl.appendChild(ulEl);

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

var seaPubLibUl = document.getElementById('seaPubLibList');
var ulEl = document.createElement('ul');

for (var i = 0; i < seaPubLib.strings.length; i++) {
  var liEl = document.createElement('li');
  liEl.textContent = seaPubLib.strings[i];
  ulEl.appendChild(liEl);
}
seaPubLibUl.appendChild(ulEl);

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

var southLakeUnionUl = document.getElementById('southLakeUnionList');
var ulEl = document.createElement('ul');

for (var i = 0; i < southLakeUnion.strings.length; i++) {
  var liEl = document.createElement('li');
  liEl.textContent = southLakeUnion.strings[i];
  ulEl.appendChild(liEl);
}
southLakeUnionUl.appendChild(ulEl);

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

var seaTacUl = document.getElementById('seaTacList');
var ulEl = document.createElement('ul');

for (var i = 0; i < seaTac.strings.length; i++) {
  var liEl = document.createElement('li');
  liEl.textContent = seaTac.strings[i];
  ulEl.appendChild(liEl);
}
seaTacUl.appendChild(ulEl);
