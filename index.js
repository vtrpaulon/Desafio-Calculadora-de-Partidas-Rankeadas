//@vitorPaulon
let nomeDoHeroi = "SuperVitor";
let vitorias = 500;
let derrotas = 150;
let ranking = vitorias - derrotas;

function calculadoraPartidas(ranking){
    if (ranking <= 10){
    return `O Herói de nome ${nomeDoHeroi} está no nível de Ferro`
    }else if (ranking <= 20){
        return `O Herói de nome ${nomeDoHeroi} está no nível de Bronze`
    }else if (ranking <= 50){
        return `O Herói de nome ${nomeDoHeroi} está no nível de Prata`
    }else if (ranking <= 80){
        return `O Herói de nome ${nomeDoHeroi} está no nível de Ouro`
    }else if (ranking <= 90){
        return `O Herói de nome ${nomeDoHeroi} está no nível de Platina`
    }else if (ranking <= 100){
        return `O Herói de nome ${nomeDoHeroi} está no nível de Ascendente`
    }else if (ranking <= 200){
        return `O Herói de nome ${nomeDoHeroi} está no nível de Imortal`
    }else{
        return `O Herói de nome ${nomeDoHeroi} está no nível de Supremo`   
    }
}
console.log(calculadoraPartidas(ranking));