var primes = require( 'prime-sieve' )( 1000000 );

// 37 36 35 34 33 32 31
// 38 17 16 15 14 13 30
// 39 18  5  4  3 12 29
// 40 19  6  1  2 11 28
// 41 20  7  8  9 10 27
// 42 21 22 23 24 25 26
// 43 44 45 46 47 48 49

module.exports = function(){
	var numPrimes = 3
	  ,      step = 4
	  ,         i = 9
	  ,   corners = 5
	  ;

	while( ( numPrimes / corners ) > .1 ){
		for( var j=0; j<4; j++ ){
			i += step;
			primes.isPrime( i ) && numPrimes++;
		}

		corners += 4;
		step    += 2;
	}

	return step-1;
};