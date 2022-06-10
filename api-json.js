import fetch from 'node-fetch';

fetch('https://opticasbenichy.com.mx/benichy/ws/tratamiento.php')
    .then(res => res.json())
    .then((out) => {
        console.log('Output: ', out);
}).catch(err => console.error(err));