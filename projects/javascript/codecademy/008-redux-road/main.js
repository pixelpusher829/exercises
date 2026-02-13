const initialWagonState = {
	supplies: 100,
	distance: 0,
	days: 0,
	cash: 200,
};

const reducer = (state = initialWagonState, action) => {
	switch (action.type) {
		case "gather": {
			return {
				...state,
				days: state.days + 1,
				supplies: state.supplies + 15,
			};
		}

		case "travel": {
			if (state.supplies - action.payload * 20 < 1) {
				return state;
			}
			return {
				...state,
				distance: state.distance + action.payload * 10,
				days: state.days + action.payload,
				supplies: state.supplies - action.payload * 20,
			};
		}

		case "tippedWagon": {
			if (state.supplies - 30 < 1) {
				return state;
			}
			return {
				...state,
				days: state.days + 1,
				supplies: state.supplies - 30,
			};
		}

		case "sell": {
			if (state.supplies - 20 < 1) {
				return state;
			}
			return {
				...state,
				days: state.days + 1,
				supplies: state.supplies - 20,
				cash: state.cash + 5,
			};
		}

		case "buy": {
			if (state.cash - 15 < 1) {
				return state;
			}
			return {
				...state,
				days: state.days + 1,
				supplies: state.supplies + 25,
				cash: state.cash - 15,
			};
		}

		case "theft": {
			return {
				...state,
				days: state.days + 1,
				cash: state.cash / 2,
			};
		}

		default: {
			return state;
		}
	}
};

// Initialise
let wagon = reducer(undefined, {});
console.log(`Day ${wagon.days}: `, wagon);

// Actions
wagon = reducer(wagon, { type: "travel", payload: 1 });
console.log(`Day ${wagon.days}: `, wagon);

wagon = reducer(wagon, { type: "gather" });
console.log(`Day ${wagon.days}: `, wagon);

wagon = reducer(wagon, { type: "tippedWagon" });
console.log(`Day ${wagon.days}: `, wagon);

wagon = reducer(wagon, { type: "travel", payload: 3 });
console.log(`Day ${wagon.days}: `, wagon);
