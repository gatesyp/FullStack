var quad = require('./quadratic');
var prompt = require('prompt');

prompt.get(['a', 'b', 'c'], function(err, result){
    if(err) {return onErr(err);}
    console.log('command line input received: ');
    console.log(result.a);
    console.log(result.b);
    console.log(result.c);

quad(result.a,result.b,result.c, function(err,quadsolve){
    if(err) {
                console.log('error: ', err);

    }
    else {
        console.log("Roots are " + quadsolve.root1() + ", " + quadsolve.root2());
    }

});
});
