import { TipoEmpleado } from './tipo_empleado.enum';
import { Empleado } from "./empleado";
import { EmpleadoPorHora } from "./empleado_hora";
import { EmpleadoTiempoCompleto } from "./empleado_tiempo_completo";

const empleadoTiempoCompleto: Empleado = new EmpleadoTiempoCompleto(
    'Ana Isabel',
    123,
    1500000
);
empleadoTiempoCompleto.mostrarInformacion();
console.log(`Salario: ${empleadoTiempoCompleto.calcularSalario()}`);

if (empleadoTiempoCompleto instanceof EmpleadoTiempoCompleto) { //Para acceder a una instancia que no pertenece a lo que necesitamos, en este caso el empleadoTiempoCompleto
    console.log(empleadoTiempoCompleto.salarioMensual);         // pero que sí estaba en EmpleadoTiempoCompleto
}

// Cast
console.log(
    'Cast 1', (empleadoTiempoCompleto as EmpleadoTiempoCompleto).salarioMensual
);

console.log(
    'Cast 2', (<EmpleadoTiempoCompleto>empleadoTiempoCompleto).salarioMensual
);

console.log('======================================================')

const empleadoPorHora = new EmpleadoPorHora(
    'Felipe Fernandez',
    456,
    TipoEmpleado.POR_HORA,
    20000,
    5
);
empleadoPorHora.mostrarInformacion();
console.log(`Salario: ${empleadoPorHora.calcularSalario()}`);
console.log(empleadoPorHora.horasTrabajadas);
console.log(empleadoPorHora.tarifaPorHora);

const empleados = [empleadoTiempoCompleto, empleadoPorHora];