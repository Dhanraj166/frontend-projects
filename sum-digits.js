
let n=35826;
let sum=0;
while(n>0){
    sum=sum+(n%10)
    n=Math.floor(n/10);
}
console.log(sum)
