let datosEmpleados = [];


function registrarEmpleado() {
    let documentoEmpleado = Number(prompt("Ingrese el documento del empleado"));
    let nombreEmpleado = prompt("Ingrese nombre del empleado");
    let cargoEmpleado = prompt("Ingrese el cargo"); 
    let valorHora = Number(prompt ("Ingrese el valor de la hora"));
    let cantidadHora = Number( prompt ("Ingrese la cantidad de horas"));
    let salario = valorHora * cantidadHora;

    let datos = [documentoEmpleado, nombreEmpleado, cargoEmpleado,salario]; 
    datosEmpleados.push(datos);
   
    let otroRegistro = prompt("Quiere ingresar otro registro: si o no");
    if (otroRegistro == "si") {
        registrarEmpleado();  
    }else{
        menu();
    }
}

function busquedaEmpleado(){
    let documentoEmpleado1 = Number(prompt("Ingrese el documento del empleado"));
    for (let index = 0; index < datosEmpleados.length;index++){
        if (datosEmpleados[index][0] === documentoEmpleado1) {
            let datos1=[datosEmpleados[index][1], datosEmpleados[index][2], datosEmpleados[index][3]];
            console.log("Los datos del empleado son: " + datos1);            
        }else{
            if (datosEmpleados[index][0] != documentoEmpleado1){
                console.log("No esta registrado")

            }      
        }
    }
    menu();
}

function listaEmpleados(){
    for (let index = 0; index < datosEmpleados.length;index++){
        let datos1=[datosEmpleados[index][1], datosEmpleados[index][2], datosEmpleados[index][3]];        
    }
    console.log(datos1) 
    menu();
}

function menu() {
    let opciones = Number(prompt("Seleccione una ocpion: \n1 - Ingresar nuevo empleado\n2 -  Buscar empleado por cedula \n3 - Total de empleados\n4 - Salir"));  
    return opciones     
}

let repetir = true;
while (repetir) {
    let opciones = menu();
    switch (opciones) {
        case 1: 
            registrarEmpleado();          
            break;
        case 2:
            busquedaEmpleado();
            break;
        case 3:
            listaEmpleados();
            break;
        case 4:
            repetir = false; 
            break;   
        default:
            if (opciones <=0 || opciones >4) {  
                console.log("Ingrese una opción válida"); 
            }           
            break;
    }    
}