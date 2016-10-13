'use strict'

var allStores = [];
var hrs = ['6:00AM','7:00AM','8:00AM','9:00AM','10:00AM','11:00AM','12:00PM','1:00PM','2:00PM','3:00PM','4:00PM','5:00PM','6:00PM','7:00PM','8:00PM'];

var lbsBodyEl = document.getElementById('tableBod');
var headerEl = document.getElementById('topHead');
var headerEmpEl = document.getElementById('topEmp');
var bodyEmpEl = document.getElementById('bodEmp');
var tableBottomEl = document.getElementById('bottomHead');
var bottomEmpEl = document.getElementById('empFoot');

var form = document.getElementById('form');

// NOTE: Constructor for building store objects, and prototype methods
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

Stores.prototype.callMethods = function() {
  this.getRando();
  this.calcCustPerHour();
  this.calcCupsPerHour();
  this.getPounds();
  this.getEmp();
  this.calcPoundsCupHourly();
  this.calcDailyBeanPound();
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

var cfcWide = {
  name: 'Campfire Coffee',
  totalPoundsNeeded: 0,
  hourlyBeanPound: [],
  employeePerDay: 0,
  employeePerHr: [],

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
  }
};

function cfcWideCallAll() {
  cfcWide.calcDailyTotalBeanPound();
  cfcWide.calcHourlyTotalBeanPound();
  cfcWide.calcDailyStaffTotal();
  cfcWide.calcHrlyStaffTotal();
}
cfcWideCallAll();

function clearCfcWide() {
  cfcWide.totalPoundsNeeded = 0;
  cfcWide.hourlyBeanPound = [];
  cfcWide.employeePerDay = 0;
  cfcWide.employeePerHr = [];
}
// NOTE: RENDERING LBS TABLE

function lbsHeaderRow() {
  var rowEl = document.createElement('tr');
  var emptyCell = document.createElement('td');
  emptyCell.textContent = ' ';
  rowEl.appendChild(emptyCell);

  var hourlyCell = document.createElement('td');
  hourlyCell.textContent = 'Daily Location Total';
  rowEl.appendChild(hourlyCell);

  for (var i = 0; i < hrs.length; i++) {
    var storeHoursCell = document.createElement('td');
    storeHoursCell.textContent = hrs[i];
    rowEl.appendChild(storeHoursCell);
  }
  headerEl.appendChild(rowEl);
}

lbsHeaderRow();

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
  lbsBodyEl.appendChild(rowEl);
}

var lbsBeanRows = function () {
  for (var i = 0; i < allStores.length; i++) {
    makeRow(allStores[i]);
  }
};
lbsBeanRows();

function totalsRow() {
  var rowEl = document.createElement('tr');
  var totalCell = document.createElement('td');
  totalCell.textContent = 'Totals';
  rowEl.appendChild(totalCell);

  var companyTotal = document.createElement('td');
  companyTotal.textContent = cfcWide.totalPoundsNeeded.toFixed(2);
  rowEl.appendChild(companyTotal);

  for (var i = 0; i < cfcWide.hourlyBeanPound.length; i++) {
    var cell = document.createElement('td');
    cell.textContent = cfcWide.hourlyBeanPound[i];
    rowEl.appendChild(cell);
  }
  tableBottomEl.appendChild(rowEl);
}
totalsRow();
// NOTE: RENDERING EMPLOYEE TABLE

function headerEmpRow() {
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
headerEmpRow();

function empDataRows(store) {
  var rowEl = document.createElement('tr');
  var cell = document.createElement('td');
  cell.textContent = store.location;
  rowEl.appendChild(cell);

  var totals = document.createElement('td');
  totals.textContent = store.empPerDay;
  rowEl.appendChild(totals);

  for (var i = 0; i < store.empPerHr.length; i++) {
    var tdEl = document.createElement('td');
    tdEl.textContent = store.empPerHr[i];
    rowEl.appendChild(tdEl);
  }

  bodyEmpEl.appendChild(rowEl);
}

function makeEmpRows() {
  for (var i = 0; i < allStores.length; i++) {
    empDataRows(allStores[i]);
  }
}
makeEmpRows();

function empTotalsRow() {
  var rowEl = document.createElement('tr');
  var totalEmpCell = document.createElement('td');
  totalEmpCell.textContent = 'totals';
  rowEl.appendChild(totalEmpCell);
  bottomEmpEl.appendChild(rowEl);

  var totalEmpNeedCell = document.createElement('td');
  totalEmpNeedCell.textContent = cfcWide.employeePerDay;
  rowEl.appendChild(totalEmpNeedCell);
  bottomEmpEl.appendChild(rowEl);

  for (var i = 0; i < cfcWide.employeePerHr.length;i++) {
    var empPerHrCell = document.createElement('td');
    empPerHrCell.textContent = Math.round(cfcWide.employeePerHr[i]);
    rowEl.appendChild(empPerHrCell);
    bottomEmpEl.appendChild(rowEl);
  }
}
empTotalsRow();

function formSubmit(event) {
  event.preventDefault();

  var location = event.target.location.value;
  var minCust = event.target.minCust.value;
  var maxCust = event.target.maxCust.value;
  var avgCup = event.target.avgCup.value;
  var avgPounds = event.target.avgPounds.value;
  var newStores = new Stores(location, minCust, maxCust, avgCup, avgPounds);

  newStores.callMethods();
  document.getElementById('bottomHead').innerHTML = '';
  document.getElementById('empFoot').innerHTML = '';
  document.getElementById('tableBod').innerHTML = '';
  document.getElementById('bodEmp').innerHTML = '';

  clearCfcWide();
  cfcWideCallAll();
  lbsBeanRows(newStores);
  totalsRow();
  empTotalsRow();
  makeEmpRows(newStores);
}

form.addEventListener('submit', formSubmit);
