import MargaritaImage from './../data/img/pizza/1.jpg'
import MexicanImage from './../data/img/pizza/2.jpg'
import FourCheeseImage from './../data/img/pizza/9.jpg'
import AmericanImage from './../data/img/pizza/8.jpg'
import RussianImage from './../data/img/pizza/3.jpg'
import ItalianImage from './../data/img/pizza/5.jpg'
import SeafoodImage from './../data/img/pizza/6.jpg'
import IndianImage from './../data/img/pizza/4.jpg'
import SpicyImage from './../data/img/pizza/7.jpg'


const fetchPizza = () => new Promise((res, rej) => {    //emulation server request. delay - 2 seconds
    setTimeout(() => {
        res([
            {id: 1, name: 'Margarita', price: 2.5, spicy: false, image: MargaritaImage},
            {id: 2, name: 'Mexican', price: 3.6, spicy: true, image: MexicanImage},
            {id: 3, name: '4 cheese', price: 2.9, spicy: false, image: FourCheeseImage},
            {id: 4, name: 'American', price: 3.5, spicy: true, image: AmericanImage},
            {id: 5, name: 'Russian', price: 2.8, spicy: false, image: RussianImage},
            {id: 6, name: 'Italian', price: 2.2, spicy: false, image: ItalianImage},
            {id: 7, name: 'Indian', price: 2.1, spicy: true, image: IndianImage},
            {id: 8, name: 'Seafood pizza', price: 3.6, spicy: false, image: SeafoodImage},
            {id: 9, name: 'Super spicy pizza', price: 3.6, spicy: true, image: SpicyImage}
        ]);
    }, 2000);
})

export default fetchPizza