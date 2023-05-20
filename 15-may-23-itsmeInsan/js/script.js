function hitungluas(){
    var sisiluas = document.getElementById("sisi-luas").value;//deklarasikan input sisi luas persegi 
    document.getElementById("rumus-luas").innerHTML = 'L = SxS';
    document.getElementById("perhitungan-luas").innerHTML = 'L='+ sisiluas +'x'+sisiluas;
    document.getElementById("output-luas").innerHTML = 'L = '+ sisiluas*sisiluas + 'Cm';
    //manggil id yang sdh di deklarasikan di HTML
    console.log(sisiluas);
    //menampilkan input sisiluas di console
}

function reset(){
    if(document.getElementById("result1")){
    document.getElementById("rumus-luas").innerHTML = '';
    document.getElementById("perhitungan-luas").innerHTML = '';
    document.getElementById("output-luas").innerHTML = '';
    }
    if(document.getElementById("result2")){
        document.getElementById("rumus-keliling").innerHTML = '';
        document.getElementById("perhitungan-keliling").innerHTML = '';
        document.getElementById("output-keliling").innerHTML = '';
    }
    //saya memberikan value yang berbeda antara 2 reset luas dan keliling. kemudian hasilnya saya kosongkan
}

function hitungkeliling(){
    var sisikeliling = document.getElementById("sisi-keliling").value;//deklarasikan input sisi keliling persegi
    document.getElementById("rumus-keliling").innerHTML = 'K = 4xS';
        document.getElementById("perhitungan-keliling").innerHTML = 'K= 4 x '+ sisikeliling;
        document.getElementById("output-keliling").innerHTML = 'K = '+ 4*sisikeliling + 'Cm';
        
        console.log(sisikeliling);
         //menampilkan input sisikeliling di console
}
