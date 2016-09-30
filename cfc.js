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
getPoundsPerHr: function() {
  for (var i = 0; i < hrs.length; i++) {
    this.poundCupHrly.push(Math.ceil(this.cupsPerHour[i] / 16 + this.hrlyBeanPound));
  }
},
getToGoPoundsPerDay: function() {
  for (var i = 0; i < hrs.length; i++) {
    this.toGoPoundsPerDay.push(Math.ceil(this.toGoPoundsPerDay += hrs.length[i]))
  }
},

}
pike.calcCustPerHour();
pike.calcCupsPerHour();
pike.getPounds();
pike.getEmp();
pike.getPoundsPerHr();

var capHill = {
  location: 'Capitol Hill',
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
  poundCupDaily:0,
  dailyBeanPound:0,
  empPerHr: [],
  empPerDay:0,

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
    this.cupsPerHour.push(this.custPerHour[i] * this.avgCups);
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
   }
}
capHill.calcCustPerHour();
capHill.calcCupsPerHour();
capHill.getPounds();
capHill.getEmp();

var seaPubLib = {
  location: 'Seattle Public Library',
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
  poundCupDaily:0,
  dailyBeanPound:0,
  empPerHr: [],
  empPerDay:0,

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
    this.cupsPerHour.push(this.custPerHour[i] * this.avgCups);
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
   }
}
seaPubLib.calcCustPerHour();
seaPubLib.calcCupsPerHour();
seaPubLib.getPounds();
seaPubLib.getEmp();

var southLakeUnion = {
  location: 'South Lake Union',
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
  poundCupDaily:0,
  dailyBeanPound:0,
  empPerHr: [],
  empPerDay:0,

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
    this.cupsPerHour.push(this.custPerHour[i] * this.avgCups);
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
   }
}
southLakeUnion.calcCustPerHour();
southLakeUnion.calcCupsPerHour();
southLakeUnion.getPounds();
southLakeUnion.getEmp();

var seaTac = {
  location: 'Sea-Tac Airport',
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
  poundCupDaily:0,
  dailyBeanPound:0,
  empPerHr: [],
  empPerDay:0,

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
    this.cupsPerHour.push(this.custPerHour[i] * this.avgCups);
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
   }
}
seaTac.calcCustPerHour();
seaTac.calcCupsPerHour();
seaTac.getPounds();
seaTac.getEmp();
