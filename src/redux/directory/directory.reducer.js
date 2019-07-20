import ImgHat from '../../assets/hat.jpg';
import Jacket from '../../assets/jacket.jpg'; 
import Sneakers from '../../assets/sneakers.jpg'; 
import Women from '../../assets/women.jpg'; 
import Men from '../../assets/men.jpg'; 

const INITIAL_STATE = {
  sections: [
    {
      title: 'hats',
      imageUrl: ImgHat,
      id: 1,
      linkUrl: 'shop/hats'
    },
    {
      title: 'jackets',
      imageUrl: Jacket,
      id: 2,
      linkUrl: 'shop/jackets'
    },
    {
      title: 'sneakers',
      imageUrl: Sneakers,
      id: 3,
      linkUrl: 'shop/sneakers'
    },
    {
      title: 'womens',
      imageUrl: Women,
      size: 'large',
      id: 4,
      linkUrl: 'shop/womens'
    },
    {
      title: 'mens',
      imageUrl: Men,
      size: 'large',
      id: 5,
      linkUrl: 'shop/mens'
    }
  ]
}

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;