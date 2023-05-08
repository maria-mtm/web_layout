// sintaxis:
// $("selector").acción

//Esto lo hacemos para asegurarnos que el documento siempre carga. Dentro de la funcion, pondremos las acciones:
// $(document).ready(function(){
// })
// Se podria acortar asi:
// $(function(){

//     // $("#add_button").click(function(){

//     //     let producto={title:$("#card_title").value,price:$("#card_price").value}
//     //     console.log(producto);

//     //     $("#cuerpo_carrito").append(producto);
//     // })

// })

let total=0;

function recibirDatos (prenda,precio){

    $("#cuerpo_carrito").append(`<p>`+prenda+` - `+precio+` euros</p>`);
    total+=precio;
}

function sumar(){
    
    $("#suma_carrito").append(`<p>El total es: `+total+` euros</p>`);
}



