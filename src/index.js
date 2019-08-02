import React from 'react';
import ReactDOM from 'react-dom';

import Counter from './counte.js';

import {createStore, bindActionCreators} from 'redux';
import reducer from './reducer.js';
import * as actions from './actions.js';

const store = createStore(reducer);
const {dispatch} = store;

const { inc, dec, rnd } =  
bindActionCreators(actions, dispatch);

	const update = () => {
		ReactDOM.render(
		<Counter 
		 counter={store.getState()}
		 inc={inc}
		 dec={dec}
		 rnd={()=>{
		 	const value = Math.floor(Math.random()*10);
		 	rnd(value);
		 }}/>,
	document.getElementById('root'));
};
update();
store.subscribe(update);


