import React from 'react';

const Counter = ({counter, inc, dec , rnd}) => {
	return (
		<div id="root" class="jumbotron">
	      <h2 id="counter">{counter}</h2>
	      <button 
	       onClick={dec}
	       className="btn btn-primary btn-lg" id="dec">DEC</button>
	      <button
	       onClick={inc}
	       className="btn btn-primary btn-lg" id="inc">INC</button>
	      <button
	      onClick={rnd}
	       className="btn btn-primary btn-lg" id="rnd">RND</button>
	    </div>
	);
};


export default Counter;