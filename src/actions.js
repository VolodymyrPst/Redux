export const inc = () => ({type: 'inc'});
export const dec = () => ({type: 'dec'});
export const rnd = (payload) => {
	return {
		type: 'rnd', 
		payload: Math.floor(Math.random()*10)
	}
};