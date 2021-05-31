//first way
var inch=24;
var feet=inch/12;
console.log(feet)
//second way
function inchToFeet(inch)
{
    var feet=inch/12;
    return feet;
}
var feet1=inchToFeet(158);
console.log(feet1)
//third way
var senior=[178,250,358]
console.log(inchToFeet(senior[2]))
console.log(inchToFeet(senior[0]))