

function calcularIMC(peso, altura){
    imc = peso / altura**2
    if(imc >= 35.00){
        console.log(`Peso = ${peso}\nAltura = ${altura}\nSeu imc é ${imc} \nCategoria: Obesidade Extrema`)
    }else if(imc >= 29.9 && imc < 35.00){
        console.log(`Peso = ${peso}\nAltura = ${altura}\nSeu imc é ${imc} \nCategoria: Obesidade`)
    }else if(imc >= 24.9 && imc < 29.9){
        console.log(`Peso = ${peso}\nAltura = ${altura}\nSeu imc é ${imc} \nCategoria: excesso de peso`)
    }else if(imc >= 18.5 && imc < 24.9){
        console.log(`Peso = ${peso}\nAltura = ${altura}\nSeu imc é ${imc} \nCategoria: Peso normal`)
    }else{
        console.log(`Peso = ${peso}\nAltura = ${altura}\nSeu imc é ${imc} \nCategoria: Baixo peso`)
    }
}
calcularIMC(70,1.70);
calcularIMC(60,1.80);
calcularIMC(70,1.90);
calcularIMC(80,1.70);