const alas = document.getElementById('alas')
const tinggi = document.getElementById('tinggi')
const hitungluas = document.getElementById('hitungluas')
const hasilluas = document.getElementById('hasilluas')

// menghitung luas
hitungluas.addEventListener('click', function() {
    let a = alas.value
    let t = tinggi.value
    let l = 0.5*a*t

    hasilluas.innerHTML = 
        `L = 1/2 x a x t <br>
        L = 1/2 x ${a} x ${t} <br>
        L = ${l} <br><br>
        
        Jadi luas segitiganya adalah ${l}`
})
// END