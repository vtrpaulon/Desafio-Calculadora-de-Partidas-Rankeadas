//@vitorPaulon
let nomeDoHeroi = "SuperVitor";
let vitorias = 500;

function calculadoraPartidas(vitorias){
    if (vitorias <= 10){
    return `O Herói de nome ${nomeDoHeroi} está no nível de Ferro`
    }else if (vitorias <= 20){
        return `O Herói de nome ${nomeDoHeroi} está no nível de Bronze`
    }else if (vitorias <= 50){
        return `O Herói de nome ${nomeDoHeroi} está no nível de Prata`
    }else if (vitorias <= 80){
        return `O Herói de nome ${nomeDoHeroi} está no nível de Ouro`
    }else if (vitorias <= 90){
        return `O Herói de nome ${nomeDoHeroi} está no nível de Platina`
    }else if (vitorias <= 100){
        return `O Herói de nome ${nomeDoHeroi} está no nível de Ascendente`
    }else if (vitorias <= 200){
        return `O Herói de nome ${nomeDoHeroi} está no nível de Imortal`
    }else{
        return `O Herói de nome ${nomeDoHeroi} está no nível de Supremo`   
    }
}
console.log(calculadoraPartidas(vitorias));