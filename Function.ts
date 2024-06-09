let num = 5;
function bus(){
    num--
    if (num!= -5){
        return "waiting for bus"
} else {return false} }

do{
    let response =bus()
    console.log(response)
}
while(num>-5);