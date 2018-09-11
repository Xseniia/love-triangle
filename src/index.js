module.exports = function getLoveTrianglesCount(preferences = []) {
  let counter = 0;
  for(let i = 0; i < preferences.length; i++) {
  	let sympth = preferences[i] - 1;
  	if (sympth != i) {
  		sympth = preferences[sympth] - 1;
  		if (preferences[sympth] - 1 == i){
  			counter++;
  			preferences[i] = 0;
  		}
  	}
  }
  return counter;
}







