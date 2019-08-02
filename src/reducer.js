const reducer = (state = 0, action) => {

	switch (action.type) {
		case 'inc':
			return state + 1;

		case 'dec':
			return state - 1;

		case 'rnd':
			return state + action.payload;

		default :
			return state;
	}
};

export default reducer;