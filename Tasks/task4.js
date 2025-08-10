function testScopes() {
    console.log("=== Block Scope Test ===");

    if (true) {
        var x = 1;     // function-scoped
        let y = 2;     // block-scoped
        const z = 3;   // block-scoped
        console.log("Inside block:", x, y, z); 
    }

    console.log("Outside block:");
    console.log("x:", x); //  var ignores block scope

    try {
        console.log("y:", y); //  ReferenceError
    } catch {
        console.log("y is not accessible here");
    }

    try {
        console.log("z:", z); // ReferenceError
    } catch {
        console.log("z is not accessible here");
    }
    //---------------------------------------------------
    console.log("\n=== Nested Function Test ===");

    var outerVar = "I am var in outerFunction";
    let outerLet = "I am let in outerFunction";
    const outerConst = "I am const in outerFunction";

    function innerFunction() {
        console.log("From innerFunction:", outerVar);   //  accessible
        console.log("From innerFunction:", outerLet);   //  accessible
        console.log("From innerFunction:", outerConst); //  accessible

        {
            var innerVar = "var in block";
            let innerLet = "let in block";
            const innerConst = "const in block";
            console.log("Inside block:", innerVar, innerLet, innerConst);
        }

        console.log("After block (innerVar):", innerVar); //  var ignores block scope
        try {
            console.log(innerLet); // ReferenceError
        } catch {
            console.log("innerLet is not accessible here");
        }
        try {
            console.log(innerConst); //  ReferenceError
        } catch {
            console.log("innerConst is not accessible here");
        }
    }

    innerFunction();
}

testScopes();

// Feature  	                       var	             let	const

// Scope    	                       Function	         Block	Block
// Hoisted	                           Yes      	     Yes  	Yes
// Initialized  before use	           Yes (undefined)	 No 	No 
// Reassign allowed                    Yes	             Yes	No
// Redeclare in same scope	           Yes               No	    No
