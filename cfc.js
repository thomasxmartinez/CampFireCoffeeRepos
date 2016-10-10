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

var tableEl = document.getElementById('tableSauce');
function makeRow(obj) {
  var rowEl = document.createElement('tr');
  var nameCell = document.createElement('td');
  nameCell.textContent = obj.location;
  rowEl.appendChild(nameCell);

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

var tableEl = document.getElementById('tableEmp');
function totalsRow(obj) {
  var rowEl = document.createElement('tr');
  var totalCell = document.createElement('td');
  totalCell.textContent = obj.location;
  rowEl.appendChild(totalCell);

  // for (var i = 0; i < obj.empPerHr.length; i++) {
  //   var hourlyCell = document.createElement('td');
  //   hourlyCell.textContent = obj.empPerHr[i].toFixed(1);
  //   rowEl.appendChild(hourlyCell);

for (var i = 0; i < obj.empPerHr.length; i++) {
  var hourlyEmpCell = document.createElement('td');
  hourlyEmpCell.textContent = obj.empPerHr[i].toFixed(1);
  rowEl.appendChild(hourlyEmpCell);
}
  tableEl.appendChild(rowEl);
}
var callRows = function () {
  for (var i = 0; i < allStores.length; i++) {
    totalsRow(allStores[i]);
    }
};
callRows();

var headerEl = document.getElementById('topHead');

function headerRow(obj) {
  var rowEl = document.createElement('tr');
  var emptyCell = document.createElement('td');
  emptyCell.textContent = ' ';
  rowEl.appendChild(emptyCell);
  headerEl.appendChild(rowEl);

  var hourlyCell = document.createElement('td');
  hourlyCell.textContent = 'Daily Location Total';
  rowEl.appendChild(hourlyCell);
  headerEl.appendChild(rowEl);



for (var i = 0; i < hrs.length; i++) {
  var storeHoursCell = document.createElement('td');
  storeHoursCell.textContent = hrs[i];
  rowEl.appendChild(storeHoursCell);
  headerEl.appendChild(rowEl);
  }
}

var callRows = function () {
    headerRow(allStores);
};
callRows();

var headerEmpEl = document.getElementById('topEmp');

function headerEmpRow(obj) {
  var rowEl = document.createElement('tr');
  var emptyCell = document.createElement('td');
  emptyCell.textContent = ' ';
  rowEl.appendChild(emptyCell);

  var hourlyCell = document.createElement('td');
  hourlyCell.textContent = 'Total';
  rowEl.appendChild(hourlyCell);
  headerEl.appendChild(rowEl);

for (var i = 0; i < hrs.length; i++) {
  var storeHoursCell = document.createElement('td');
  storeHoursCell.textContent = hrs[i];
  rowEl.appendChild(storeHoursCell);
}
  headerEmpEl.appendChild(rowEl);
}

var callRows = function () {
    headerEmpRow(allStores);
};
callRows();

var cfcWide = {
  name: 'Campfire Coffee',
  totalPoundsNeeded: 0,
  hourlyBeanPound: [ ],
  employeePerDay: 0,
  employeePerHr: [ ],

  calcDailyTotalBeanPound: function() {
    for (var i = 0; i < allStores.length; i++) {
    this.totalPoundsNeeded += parseFloat(allStores[i].dailyBeanPound.toFixed(2));
    }
  },
  calcHourlyTotalBeanPound: function() {
    for (var i = 0; i < hrs.length; i++) {
      var counter = 0;
      for (var j = 0; j < allStores.length; j++) {
        counter += allStores[j].hrlyBeanPound[i];
      }
      this.hourlyBeanPound.push(counter.toFixed(2));
    }
  },
  calcDailyStaffTotal: function() {
    for (var i = 0; i < allStores.length; i++) {
      this.employeePerDay += allStores[i].empPerDay;
    }
  },
  calcHrlyStaffTotal: function() {
    for (var i = 0; i < hrs.length; i++) {
      var counter = 0;
      for (var j = 0; j < allStores.length; j++) {
        counter += allStores[j].empPerHr[i];
      }
      this.employeePerHr.push(counter.toFixed(2));
    }
  },
};


cfcWide.calcDailyTotalBeanPound();
cfcWide.calcHourlyTotalBeanPound();
cfcWide.calcDailyStaffTotal();
cfcWide.calcHrlyStaffTotal();

//   calcHrlyStaffTotal: function() {
//     for (var i = 0; i < hrs.length; i++) {
//       var counter = 0;
//       for (var j = 0; j < allStores.length; j++) {
//         counter += allStores[j].empPerHr[i];
//       }
//     }
//   }
// };

// function callCfcWideMethods() {
  // cfcWide.calcDailyTotalBeanPound();
  // cfcWide.calcHourlyTotalBeanPound();

  // cfcWide.calcHrlyStaffTotal();
// };
// callCfcWideMethods();

var tableBottomEl = document.getElementById('bottomHead');
function poundTotalsRow() {
  var rowEl = document.createElement('tr');
  var totalBeanCell = document.createElement('td');
  totalBeanCell.textContent = 'totals';
  rowEl.appendChild(totalBeanCell);
  tableBottomEl.appendChild(totalBeanCell);



  var rowEl = document.createElement('tr');
  var totalHourCell = document.createElement('td');
  totalHourCell.textContent = cfcWide.dailyBeanPound;
  rowEl.appendChild(totalHourCell);


  var totalBeanPoundCell = document.createElement('td');
    totalBeanPoundCell.textContent = cfcWide.totalPoundsNeeded;
    rowEl.appendChild(totalBeanPoundCell);
    tableBottomEl.appendChild(rowEl);

  for (var i = 0; i < cfcWide.hourlyBeanPound.length; i++) {
    var hourlyBeanPoundCell = document.createElement('td');
    hourlyBeanPoundCell.textContent = cfcWide.hourlyBeanPound[i];
    rowEl.appendChild(hourlyBeanPoundCell);
    tableBottomEl.appendChild(rowEl);
  }
}
var callRow = function () {
  for (var i = 0; i < allStores[i].length; i++) {
  poundTotalsRow(allStores[i].hourlyBeanPound);
  }
}
poundTotalsRow();
callRow();

var bottomEmpEl = document.getElementById('empFoot');
function empTotalsRow() {
  var rowEl = document.createElement('tr');
  var totalEmpCell = document.createElement('td');
  totalEmpCell.textContent = 'totals';
  rowEl.appendChild(totalEmpCell);
  bottomEmpEl.appendChild(rowEl);

var totalEmpNeedCell = document.createElement('td');
    totalEmpNeedCell.textContent = cfcWide.employeePerHr[i];
    rowEl.appendChild(totalEmpNeedCell);
    bottomEmpEl.appendChild(rowEl);

for (var i = 0; i < cfcWide.employeePerHr.length;i++) {
  var empPerHrCell = document.createElement('td');
  empPerHrCell.textContent = cfcWide.employeePerHr[i];
  rowEl.appendChild(empPerHrCell);
  bottomEmpEl.appendChild(rowEl);
  }
}
var allRow = function () {
  for (var i = 0; i < allStores[i].length; i++) {
    empTotalsRow(allStores[i].employeePerHr[i]);
  }
}
empTotalsRow();
allRow();
