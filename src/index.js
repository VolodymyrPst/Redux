import {createStore} from 'redux';

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

const store = createStore(reducer);

const inc = () => ({type: 'inc'});
const dec = () => ({type: 'dec'});
const rnd = (payload) => ({type: 'rnd', payload});


document
	.getElementById('inc')
	.addEventListener('click', () => {
		store.dispatch(inc());
});

document
	.getElementById('dec')
	.addEventListener('click', () => {
		store.dispatch(dec());
});

document
	.getElementById('rnd')
	.addEventListener('click', () => {
		const payload = Math.floor(Math.random()*11);
		store.dispatch(rnd(payload));
});

const update = () => {
	document
	.getElementById('counter')
	.innerHTML = store.getState();
};

store.subscribe(update);
