
function receivesAFunction (fn)
{ 
    fn();
}
//
function returnsANamedFunction()
{
    const result=function sayhi(){return "hi"};
    return result;
}
//
function returnsAnAnonymousFunction()
{
    return function(){};
}
