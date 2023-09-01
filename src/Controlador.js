function controlador(comandos){
     // Define una expresión regular para el formato
      const formatoRegex = /^(\d+),(\d+)([NSEO])$/;
  // Intenta hacer coincidir la cadena de entrada con la expresión
      const coincidencia = comandos.match(formatoRegex);
      if (coincidencia) {
            return comandos;
      }
   // La cadena de entrada no tiene el formato correcto
      return false;
}


export default controlador;