const alas = document.getElementById('alas')
const tinggi = document.getElementById('tinggi')
const hluas = document.getElementById('hluas')
const hkeliling = document.getElementById('hkeliling')
const outputl = document.getElementById('outputl')
const outputk = document.getElementById('outputk')

// menghitung luas
hluas.addEventListener('click', function() {
    let a = alas.value
    let t = tinggi.value
    let l = 0.5*a*t

    outputl.innerHTML = 
        `L = 1/2 x a x t <br>
        L = 1/2 x ${a} x ${t} <br>
        L = ${l} <br><br>
        
        Jadi luas segitiganya adalah ${l}`
})
// END

// menghitung keliling
hkeliling.addEventListener('click', function() {
    let a = sisia.value
    let b = sisib.value
    let c = sisic.value
    let k = (parseInt(a))+(parseInt(b))+(parseInt(c))

    outputk.innerHTML = 
        `K = S1 + S2 +S3 <br>
        K = ${a} + ${b} + ${c} <br>
        K = ${k} <br><br>
        
        Jadi keliling segitiganya adalah ${k}`
})
// END