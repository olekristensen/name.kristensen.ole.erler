'use strict';

const Homey = require('homey');
const { debug } = require('zigbee-clusters');
debug(true);

class erlerzigbee extends Homey.App {
	
	onInit() {
		this.log('Magnus Erler Zigbee app is running...');
	}
	
}

module.exports = erlerzigbee;