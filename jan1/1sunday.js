function sun(){
    let years=[];
    for(let year=2024; year<=2050;year++){
        let date= new Date(year , 0,1);
        if(date.getDay()===0){
            years.push(year);
        }
    }
    document.getElementById("output").innerHTML=`1st Jan of the years ${years} falls on Sunday`
}