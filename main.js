// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data di Vue.
// Bonus:
// Aggiungere alla pagina un’immagine, presa anch’essa da un data.

const app = new Vue ({
    el: '#app',
    data: {
        text: 'Hello VueJS',
        myClasses: 'color',
        image: 'https://www.laramind.com/blog/wp-content/uploads/2019/05/1_nq9cdMxtdhQ0ZGL8OuSCUQ.jpg'
    }
});