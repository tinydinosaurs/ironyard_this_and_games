/*******************************/
/*   Setting up the examples   */
/*******************************/
var whatIsThis = function(a, b) {
	console.log('This is...', this);
	console.log('a = ', a);
	console.log('b = ', b);
};

var inAnObject = {
	name: 'inAnObject',
	test1: whatIsThis,
	anotherObject: {
		name: 'anotherObject',
		test2: whatIsThis
	}
};

var inAFunction = function(a, b) {
	this.name = 'Sally';
	whatIsThis(a, b);
};

inAFunction.prototype.test3 = whatIsThis;

var trickyTricky = {
	name: 'trickyTricky',
	why: 'does this work?',
	what: 'is going on here?'
};

var confusing = {
	name: 'confusing',
	state: 'Alaska',
	city: 'Anchorage'
};


/*******************************/
/*     Running the examples    */
/*******************************/

// Instructions:
// You are a scientist who has just discovered a *mysterious* new element
// in your lab. Since creativity isn't your strong suit, you name the element
// `this`. Your job is to figure out the properties of this new element as
// well as how it interacts with its environment. Run through each of the
// examples in whatIsThis.js, one by one (commenting out the previous example
// and uncomment the current example as necessary). In the comments section
// below each example fill in what `this` is referencing inside of the
// whatIsThis function. Why? If it throws an error, why is it throwing an
// error?

// You can open index.html in your browser and view your console to get
// started.

// * Problem 1
// whatIsThis('hello', 'world');
// * "this" is ... the global object (window)
// * because ... the 'this' keyword does a specific job: reference something.
// Tt hasn't been told to reference anything inside the function, so it looks 
// outside the function and finds the window object.




// * Problem 2
 //window.whatIsThis('hello', 'world');
// * "this" is ... still the window object.
// * because ... it's being called on the window object.




// * Problem 3
// inAnObject.test1('face', 'book');
// * "this" is ... inAnObjectObject
// * because ... whatIsThis becomes a method of inAnObject. the 'this' keyword
// still has nothing inside its own fuction to reference, so it references the object
// above it in scope.




// * Problem 4
// inAnObject.anotherObject.test1('twitter', 'book');
// * "this" is ... never reached. 
// * because ... we never call the what is this function because we throw and error first.
// the error is a type error. test1 is not a key of anotherObject and can't be retrieved as such.
// it also isn't being created as a new key because it includes a function call, and javascript has 
// no idea what to do with that information. 




// * Problem 5
// inAnObject.anotherObject.test2('twitter', 'book');
// * "this" is ... the anotherObject object that lives inside the inAnObject object.
// * because ... test2 is a method inside anotherObject, and 'this' is scoped to it.




// * Problem 6
// whatIsThis.call();
// * "this" is ... the window object
// * because ... the call method requires an an argument a specific 'this' value.
// the above has no arguments, which evaluates to undefined, which is then replaced 
// with the global object




// * Problem 7
// whatIsThis.call(trickyTricky);
// * "this" is ... the trickyTricky object.
// * because ... because call takes a 'this' value as its argument, so it is interpreting
// trickyTricky as 'this.'




// * Problem 8
// whatIsThis.call(trickyTricky, 'nice', 'job');
// * "this" is ... still the trickyTricky object.
// * because ... trickyTricky is still being passed as this. 'nice' and 'job' are optional 
// .call() arguments, and are being passed to the whatIsThis object.




// * Problem 9
// whatIsThis.call(confusing);
// * "this" is ... the confusing object.
// * because ... because confusing is now the argument being passed to call. 




// * Problem 10
// whatIsThis.call(confusing, 'hello');
// * "this" is ... still the confusing object.
// * because ... confusing is the first argument being passed to call, and is interpreted as 'this.'
// 'hello' is the second, optional, argument. it gets sent to through as the 'a' parameter.




// * Problem 11
// whatIsThis.apply(trickyTricky);
// * "this" is ... the trickyTricky object
// * because ... .apply() works the same as .call() as far as the required argument is concerned. 
// .apply() takes a this value, and trickyTricky is being passed as 'this'




// * Problem 12
// whatIsThis.apply(confusing, ['nice', 'job']);
// * "this" is ... the confusing object.
// * because ... reasons. Kidding. Because its being passed the 'this' value. ['nice', 'job'] is 
// an optional argument. It does neat stuff too, but that stuff doesn't affect 'this.'




// * Problem 13
// whatIsThis.apply(confusing, 'nice', 'job');
// * "this" is ... scuttled because of an error
// * because ... 'nice' and 'job' are not the correct type for the .apply method, so it throws an error 
// before it gets a chance to pass confusing to whatIsThis as 'this'




// * Problem 14
// inAFunction('what will', 'happen?');
// * "this" is ... the window object
// * because ... this is never defined.




// * Problem 15
// inAFunction.test3('A', 'B');
// * "this" is ... was never able to exist.
// * because ... butterfly effect. test3 isn't a function, so it throws an error, which changes the past.




// * Problem 16
// var newObject = new inAFunction('what will', 'happen?');
// * "this" is ... the window object
// * because ... it's a replica of the inAFunction object, in which this is never defined.




// * Problem 17
// var newObject = new inAFunction('what will', 'happen?');
// newObject.test3('C', 'D');
// * "this" is ... two things: window object and then the inAFunction object.
// * because ... ohmygod self-referencing objects?? I only half understand, but this is initially undefined, so it's window.
// then newObject, which is a replica of inAFunction is told to reference itself, so this becomes it. Or something...???



// * Problem 18
// inAnObject.test1.call(trickyTricky, 'face', 'book');
// * "this" is ... trickyTricky object
// * because ... that is the object passed to .call() as the 'this' argument.




// * Problem 19
// inAnObject.anotherObject.test2.apply(confusing, ['foo', 'bar']);
// * "this" is ... confusing object
// * because ... it's the object passed to .apply() as the 'this' argument.