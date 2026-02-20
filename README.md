Primer paso: Ejecuta comando  "npm create vite@latest practica1"

Segundo paso: Crear la carpeta componente donde irá el CharacterList y CharacterCard, y los types para el tipo de la respuesta de la api y del personaje de starWars

Tercer paso: implementar en App.tsx un botton de forma que cuando se pulse, se llame a la funcion llamadaApi(), la cual se encarga de hacer la llamada y obtener los datos usando el useState para almacenarlos. 

Cuarto paso: Crear el componente CaracterCard para renderizar un personaje obtenido de la api, con un estilo determinado. Probar con el primero de la lista obtenida de la respuesta de la api

Quinto paso: Crear el componente CharacterList para que se renderice la lista de personajes usando el componente CharacterCard en cada uno de los de la lista, con un estilo determinado. Se ha probado cambiando el CharacterCard por CharacterList en el retorno, y pasandole la lista en vez de uno solo. Se consigue ver la primera pagina de personajes solo 

Sexto Paso: Se añade la logica de detección de fallos y de loading , usando useState para cada uno, de forma que cuando se haya pulsado el boton de busqueda se muestre el Loading... hasta que se renderice la pagina, y de forma que cuando se detecte un error, se setee y se muestre al final. 

Séptimo Paso: Se añade la lógica de la paginación para pasar o volver a una página de personajes. Para ello extraen las dos url de la respuesta que permiten esto (previous y next) y se añaden dos botones (anterior y siguiente), de modo que si se pulsa el anterior la urlActual pasa a ser la url de la pagina antenior, por lo que se vuelve a hacer el renderizado de esa página. Lo mismo pasa con el boton para next, pero para la siguente página. Se mantiene el boton principal de antes para buscar inicialmente, solo que solo aparece para la primera búsqueda. 

-He considerado no hacer los componentes para Loading y Error, ya que en este caso no se necesitaban más que para el app.tsx en una simple linea de codigo. En un programa más complejo igual si se necesita. 

EJECUCION DEL PROGRAMA: 
    *1 Primero tienes que tener instalado Node.js
    *2 Abres el proyecto, y desde terminal ejecutas:  "npm install"   para instalar todas las dependencias necesarias. 
    *3 Para ejecutarlo, desde terminal ejecutas: "npm run dev" el cual te indicará la url local donde podrás ver la página web. 







