'use strict'

var hrs = ['6:00AM','7:00AM','8:00AM','9:00AM','10:00AM','11:00AM','12:00PM','1:00PM','2:00PM','3:00PM','4:00PM','5:00PM','6:00','7:00PM','8:00PM']

var pike = {
  minCust: 14,
  maxCust: 35,
  avgCup: 1.2,
  avgLb: 0.34,
  avgHrCust: [],

  custCount: function(min, max) {
    for (var i = 0; i < hrs.length; i++) {
    	this.avgHrCust.push(Math.floor(Math.random() * (max - min) + min));
    }
  },
  empNeed: function(cups) {
    return Math.floor(pike.custCount / cups + 1 )
  }
}

pike.custCount(pike.minCust, pike.maxCust);
pike.empNeed(pike.avgCup);
