//1- Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir, si la edad ingresada no es un número válido indicarlo en un mensaje.
let edad=0;
 edad=parseInt(prompt('ingrese la edad de la persona'))
while (edad< 18)
{
   
    window.alert('la persona no puede manejar');
    edad=parseInt(prompt('Ingrese otro valor'));
} 
if (edad>=18)
{
    window.alert('La persona tiene '+edad+ 'años, por lo tanto puede manejar')
}
   