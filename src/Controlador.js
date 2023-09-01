function controlador(comandos){
     // Define una expresión regular para el formato
      const formatoRegex = /^(\d+),(\d+)\/(\d+),(\d+)([NSEO])$/;
     // Intenta hacer coincidir la cadena de entrada con la expresión
      const coincidencia = comandos.match(formatoRegex);
      if (coincidencia) {
            const posX = coincidencia[3];
            const posY = coincidencia[4];
            const direccion = coincidencia[5];
            const cadenaDevolucion = `${posX},${posY}${direccion}`;
            return cadenaDevolucion;
      }
   // La cadena de entrada no tiene el formato correcto
      return false;
}


export default controlador;