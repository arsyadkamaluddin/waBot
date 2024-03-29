dataPair=[]

function addPair(from,to){
    if(!added(from)){
        dataPair.push([from,to])
    }else{
        dataPair = dataPair.filter(e=>{return e[0]!=from})
        dataPair.push([from,to])
    }
    console.log(dataPair)
}
function searchPair(from){
    to = dataPair.filter(e=>{return e[0]==from;})[0]
    return to[1]
}
function searchPairRev(to){
    from = dataPair.filter(e=>{return e[1]==to;})[0]
    return from[0]
}
function added(nomor){
    stat = false
    dataPair.forEach(e=>{
        if(e[0]==nomor){
            stat = true
        }
    })
    return stat;
}
module.exports={
    addPair,searchPair,searchPairRev
}