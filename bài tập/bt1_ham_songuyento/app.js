function isPrime(n){
    if(n==1){
        return false;
    }
    for (let i = 2; i < n; i++) {
        if(n%i==0){
            return false
        }
    }
    return true
}
n = parseInt(prompt("Nhập vào số cần ktra"))
console.log(isPrime(n))

