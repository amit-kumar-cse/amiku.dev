//closure
const auth = () => {
    const authUrl = 'www.auth.com';

    const login = (user, pass) => {
        console.log(authUrl, user, pass);
    };

    return {
        login: login
    }
};

const myAuth = auth();
myAuth.login('Amit', 'kumar');
//todo: mistake due to using var name and not




// /// What is output of this snippet
const arr = [10, 12, 15, 21];
for (var i = 0; i < arr.length; i++) {
    (function(index) {
        setTimeout(function() {
            console.log('Index: ' + index + ', element: ' + arr[index]);
        }, 3000);
    })(i);
}

for (var i = 0; i < arr.length; i++) {
    {
        let j = i;
        setTimeout(function() {
            console.log('Index: ' + j + ', element: ' + arr[j]);
        }, 3000);
    }
}
//todo: this was not fresh in my mind



//Index: 4 elment:  undefined
//4 times


// How `this` works differently in different scenarios.
// object
// execution contexxt

// default context
//   strict mode: undefined.
//   non strict: window
// implicit context
// explicit. bind, call, apply
// new context. new Foo();



//this example.
var x = 28;

function test() {
    console.log(this.x);
}

let obj = {
    x: 25,
    func: test
}

obj.func();

let abc = obj.func.bind(obj);
abc();


//flatten the array
var flatten = (arr) => {
    let result = [];
    for(let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            let flattened = flatten(arr[i]);
            result = result.concat(flattened);
        } else {
            result = result.concat(arr[i]);
        }
    }
    return result;
}
//todo: did not assigned the array back


console.log(flatten([[1, 2, 3], [4, 5]])); // [1, 2, 3, 4, 5])
console.log(flatten([[[1, [1.1]], 2, 3], [4, 5]])); // [1, 1.1, 2, 3, 4, 5]