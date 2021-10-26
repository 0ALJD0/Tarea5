function meses() {
    var arr=new Array(11);
    arr=["Enero", "Febrero","Marzo","Abril","Mayo",
        "Junio","Julio","Agosto", "Septiembre","Octubre",
        "Noviembre","Diciembre"];
    for (let i = 0; i < arr.length; i++) {
        alert("Mes_: "+arr[i]);
        
    }
}

class Producto_alimenticio {
    constructor(codigo, nombre, precio) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.precio = precio;
        this.imprimeDatos=function() {
        alert("Código: " + this.codigo + "\nNombre: " + this.nombre
            + "\nPrecio: " + this.precio);
    
    }
}
}

function mostrar() {
    var cheese = new Producto_alimenticio("001","1lb Queso Parmesano","$1.20");
    var meat=new Producto_alimenticio("002","2lb Ternera Fresca","$4.50");
    var milk=new Producto_alimenticio("003","2gl Leche Descremada","$6.00");
    var arr=new Array(2);
    arr=[cheese,meat,milk];
  
    for(let aliment of arr){
        aliment.imprimeDatos();
    }
}
