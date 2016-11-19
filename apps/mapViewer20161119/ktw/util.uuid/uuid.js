/**
 * Created by ChiRong on 2016/9/29.
 */
// Generate four random hex digits.
function S4() {
    return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
};
// Generate a pseudo-GUID by concatenating random hexadecimal.
function uuid() {
    return (S4()+S4()+S4()+S4()+S4()+S4()+S4()+S4()+S4());
};