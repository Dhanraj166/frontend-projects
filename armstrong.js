let n=371;
let count=0;
let ams=0;
while(n>0){
    n=Math.floor(n/10);
    count++
}
while(n>0){
    let digit=n%10;
    ams=digit**count;
    n=math.floor(n/10);
}

if(n===ams){
    console.log("Armstrong Number")
}else{
    console.log("Not Armstrong Number")
}