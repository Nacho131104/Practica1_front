Primer paso: Ejecuta comando  "npm create vite@latest practica1"

Segundo paso: Crear la carpeta componente donde irá el CharacterList y CharacterCard, y los types para el tipo de la respuesta de la api y del personaje de starWars

Tercer paso: implementar en App.tsx un botton de forma que cuando se pulse, se llame a la funcion llamadaApi(), la cual se encarga de hacer la llamada y obtener los datos usando el useState para almacenarlos. 

Cuarto paso: Crear el componente CaracterCard para renderizar un personaje obtenido de la api, con un estilo determinado. Probar con el primero de la lista obtenida de la respuesta de la api

Quinto paso: Crear el componente CharacterList para que se renderice la lista de personajes usando el componente CharacterCard en cada uno de los de la lista, con un estilo determinado. Se ha probado cambiando el CharacterCard por CharacterList en el retorno, y pasandole la lista en vez de uno solo. Se consigue ver la primera pagina de personajes solo 

Sexto Paso: Se añade la logica de detección de fallos y de loading , usando useState para cada uno, de forma que cuando no se haya pulsado el boton de busqueda se muestre el Loading..., y de forma que cuando se detecte un error, se setee y se muestre al final. 


sexto paso




