let form = document.getElementById('calculadora');
form.style.background = 'white';

const CALCULAR = document.getElementById('calcular');
const ERROR = document.getElementById('error');
const FLU = document.getElementById('flu');
const MAN = document.getElementById('man');

CALCULAR.addEventListener('click', () => {
    const DATO = document.getElementById('peso').value;
    //validar la carga de datos
    if(DATO >= 31){
        ERROR.style.display = 'none';

        let flujo1 = calcFlujo(DATO) * 1500;
        let opc1 = flujo1 /24;
        opc1 = Math.round(opc1);

        let flujo2 = calcFlujo(DATO);
        let opc2 = flujo2 * 2000;
        opc2 = opc2 / 24;
        opc2 = Math.round(opc2);

        let mantenimiento1 = opc1 * 1.5;
        let mantenimiento2 = opc2 * 1.5;
        FLU.innerHTML = "Puede utilizar: Opcion 1: " + opc1 + " cc/hr o <br>" + "Puede utilizar: Opcion 2: " + opc2 + " cc/hr" ;
        MAN.innerHTML = "Opcion 1: M+M/2 = " + mantenimiento1 + " cc/hr" + "<br> Opcion 2: M+M/2 = " + mantenimiento2 + " cc/hr";
        FLU.style.display = 'block';
        MAN.style.display = 'block';
        //console.log("funciona");
    } 
    
    else if (DATO >=0 && DATO <= 30){
        ERROR.style.display = 'none';
        let flujo = calcFlujo(DATO);
        let mantenimiento = flujo*1.5;
        FLU.innerHTML = flujo + ' cc/hr';
        MAN.innerHTML = 'M+M/2 = ' + mantenimiento + ' cc/hr';
        FLU.style.display = 'block';
        MAN.style.display = 'block';
        //console.log("funciona2");
    } 

    else {
        ERROR.style.display = 'block';
        FLU.style.display = 'none';
        MAN.style.display = 'none';
        //console.log("funciona3");
    }
});

function calcFlujo(peso){
    let resto = Number(peso);
    let flujo = 0;
    let cc = 0;
    if (resto > 30){
        //Superficie corporal = ( (peso * 4) + 7) / (peso + 90)
        let superCorpo = ((resto * 4) + 7) / (resto + 90);
        return superCorpo;
    } else  if (resto>20) {
        let aux = resto-20;
        cc = aux * 20;
        resto -= aux;
    }
    if (resto>10){
        let aux = resto-10;
        cc += aux * 50
        resto -= aux;
    }
    resto = resto * 100;
    cc += resto;
    flujo = Math.round(cc / 24);
    return flujo;
}