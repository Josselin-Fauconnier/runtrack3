
function estPremier(nombre){

    if(nombre <= 1){
        return false;
    }

    if (nombre === 2){
        return true;
    }

    if (nombre % 2 === 0){
        return false;
    }

    for (let i = 3 ; i * i <= nombre; i = i + 2){
        if(nombre % i === 0){
            return false;
        }
    }
    return true;
}






function sommeNombrespremeirs(a,b){

    if(estPremier(a) && estPremier(b)){
        return true;
    } else {
        return false;
    }

}
