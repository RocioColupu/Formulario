function Validar(){ //Validar solo letras
    let isValid = false;
    const input = document.forms['validationForm']['txtnombre'];
    
    const message = document.getElementById('message');

    const SoloLetras = new RegExp(/[a-zA-Z]/,'i');

    if(SoloLetras.test(input.value)){
        isValid = false;
        input.style.borderColor = 'palegreen';
        message.hidden = true;
    } else{
        isValid = true;
        input.style.borderColor = 'salmon';
        message.hidden = false;
    } 
    return isValid;
}

const inputRandomNumber = document.getElementById('inputRandom');

window.addEventListener('load', () => {
    getRandomNumber();
})

function getRandomNumber() {
    let randomNumber = Math.random().toString().slice(2, 8);
    inputRandomNumber.value = randomNumber;
}

function habilitar(){ // Habilitar boton de SEND
    text01 = document.getElementById('txtnombre').value;
    text02 = document.getElementById('txtemail').value;
    val = 0;
    
    if(text01 == ""){
        val++;
    }
    if (text02 == ""){
        val++;
    }
    if (val == 0 ){
        document.getElementById('btn').disabled = false;
    } else {
        document.getElementById('btn').disabled = true;
    }
}
document.getElementById('txtnombre').addEventListener('keyup', habilitar);
document.getElementById('txtemail').addEventListener('keyup', habilitar);
document.getElementById('btn').addEventListener('click', ()=>{
    alert('Haz llenado todo');
});