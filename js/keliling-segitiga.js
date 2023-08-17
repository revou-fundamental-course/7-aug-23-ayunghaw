const sisia = document.getElementById('sisia')
const sisib = document.getElementById('sisib')
const sisic = document.getElementById('sisic')
const hitungkeliling = document.getElementById('hitungkeliling')
const hasilkeliling = document.getElementById('hasilkeliling')
let btnClear = document.querySelector('#reset');
let inputs = document.querySelectorAll('input');

// menghitung keliling
hitungkeliling.addEventListener('click', function() {
    let a = sisia.value
    let b = sisib.value
    let c = sisic.value
    let k = (parseInt(a))+(parseInt(b))+(parseInt(c))

    hasilkeliling.innerHTML = 
        `K = S1 + S2 +S3 <br>
        K = ${a} + ${b} + ${c} <br>
        K = ${k} <br><br>
        
        Jadi keliling segitiganya adalah ${k}`
})
// END

// reset
btnClear.addEventListener('click',() => {
    inputs.forEach(input => input.value = "")
});
// END