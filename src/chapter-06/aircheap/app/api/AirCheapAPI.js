import 'whatwg-fetch'

let AirCheapAPI = {
	fetchAirports() {
		return fetch('airports.json')
			.then((response) => response.json())
			;
	},

	fetchTickets(origin, destination) {
		return fetch('flights.json')
			.then((response) => response.json())
			.then((fetchData) => {
				let rst = fetchData.filter((it) => {
					if (it.segment.length == 0) {
						return false;
					}
					let retVal = it.segment[0].origin === origin
						&& it.segment[it.segment.length - 1].destination === destination;
					return retVal;
				});
				return rst;
			})
			;
	}
};

export default AirCheapAPI;