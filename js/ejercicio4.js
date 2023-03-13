//Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.


let suma=0;



do 
{
    var numero=parseInt(prompt('Ingrese un numero'));

 if (isNaN (numero))
 {
  
   var numero=parseInt(prompt('vuelva a ingresar un numero ya que ingreso un caracter invalido'));
 }
 else
 {
    suma=suma+numero;
 }

} while (confirm('Desea Seguir?'))

 document.write('El resultado de la suma es: '+suma);