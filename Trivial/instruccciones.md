1. instalar bootstrap
2. creación interface pregunta
    - texto (string), respuestas (string[]), correcta: (string), puntuacion: (number)
3. Creacion de componentes: Main, Pregunta, ListaRespuestas
4. RUTA
    -/trivial -> Main
5. Dentro del componente Main colocamos el componente Pregunta y la ListaRespuestas

6. Creación del Servicio Preguntas
7. Dentro del servicio: 
    -Un array de objetos Pregunta -> arrPreguntas 
    - Inicializamos el array con una serie de preguntas
8. Creación de un método que me devuelva una única pregunta pasándole la posición de dicha pregunta.

9. Necesitamos en el componente Main una propiedad que nos indique en qué pregunta nos encontramos - numPreguntaActual (number)
10. Necesitamos en el componente Main la pregunta actual- preguntaActual (pregunta).

11. Cuando arranca el componente Main obtenemos la pregunta actual a partir del método del servicio
    -COMPROBAR CON CONSOLE.LOG

main.component.html
```html
<pregunta [texto]="preguntaActual.texto"></pregunta>
<lista-respuestas [respuestas]="preguntaActual.respuestas"></lista-respuestas>
```
12. Dentro del componente de la Lista de respuestas generamos un Output que emitirá hacia el exterior la respuesta pulsada
13. Componente padre capturamos el evento de la lista de respuestas y comprobamos si la respuesta elegida coincide con la respuesta correcta.
    -Comprobamos con console.log

OPCIONAL.
14. Sumar los puntos con cada respuesta correcta
15. Mostrar de manera gráfica si aciertas o no
16. Colocar un timeout antes de mostrar si se ha acertado o no
17. Mostrar una página final con el número de puntos totales cuando se respondan todas las preguntas.
