import '../css/componentes.css';

export const saludar = (nombre) =>{
    console.log('Creando etiqueta h1,en HTML');

    const h1 =  document.createElement('h1');
    h1.innerText = `Hola, ${nombre},soy tu amigo`;

    document.body.append(h1);
}
