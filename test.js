import fetch from "node-fetch"
fetch('https://opticasbenichy.com.mx/benichy/ws/tratamiento.php')
    .then(result => result.json())
    .then((output) => {
        console.log('Output: ', output);
        
}).catch(err => console.error(err));