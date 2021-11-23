function makeFibonacciFunction() {
    let a = 0;
    let b = -1;
    function getNextNumber() {
    	//для вывода первых 0 и 1
    	if (b < 1) {
    		b++;
    	} else {
	        b = a + b
	        a = b - a
    	}
        console.log(b);
        return b;
    }
    return getNextNumber;
}

const fibonacci = makeFibonacciFunction();

for(let i = 0; i < 16; i++) {
	fibonacci();	
}

console.log('---------------*****--------------------');

const fibonacciStar = (function(){
	let a = 0;
    let b = -1;
    function getNextNumber() {
    	//для вывода первых 0 и 1
    	if (b < 1) {
    		b++;
    	} else {
	        b = a + b
	        a = b - a
    	}
        console.log(b);
        return b;
    }
    return getNextNumber;
})();

for(let i = 0; i < 16; i++) {
	fibonacciStar();
}