function isPalindrome(a){
    let d = 0
    let c = a.length-1;
    let check = true;
    while (d < c){
        if(a[d]==a[c]){
            check = true;
        }
        else {
            check = false;
        }
        d++;
        c--;
    }
    return check;

}
console.log(isPalindrome("aabbccbbaa"))
