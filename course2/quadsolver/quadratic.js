var disc = require('./discriminant');

module.exports = function(a,b,c,next) {
	if(a == 0){
		next(new Error("a must not be 0"));
	}
	else if (disc(a,b,c)< 0) {
		next(new Error("disc less than zero thus no real roots"));
	}
	else return next(null, {
		root1:function() {
			return(-b - Math.sqrt(disc(a,b,c)))/(2*a);
		},
		root2:function() {
			return(-b + Math.sqrt(disc(a,b,c)))/(2*a);
		}
	});
}
