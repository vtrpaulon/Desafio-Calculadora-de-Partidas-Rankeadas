//@vitorPaulon
let nomeDoHeroi = "SuperVitor";
let xp = 15000;

function calculadoraDeXP(acoesConcluidas){

    if (xp <= 1000){
    return `O Herói de nome ${nomeDoHeroi} está no nível de Ferro`
    }else if (xp <= 2000){
        return `O Herói de nome ${nomeDoHeroi} está no nível de Bronze`
    }else if (xp <= 5000){
        return `O Herói de nome ${nomeDoHeroi} está no nível de Prata`
    }else if (xp <= 7000){
        return `O Herói de nome ${nomeDoHeroi} está no nível de Ouro`
    }else if (xp <= 8000){
        return `O Herói de nome ${nomeDoHeroi} está no nível de Platina`
    }else if (xp <= 9000){
        return `O Herói de nome ${nomeDoHeroi} está no nível de Ascendente`
    }else if (xp <= 10000){
        return `O Herói de nome ${nomeDoHeroi} está no nível de Imortal`
    }else{
        return `O Herói de nome ${nomeDoHeroi} está no nível de Supremo`   
    }
}
console.log(calculadoraDeXP(xp));