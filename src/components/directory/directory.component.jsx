import React from 'react';
import MenuItem from '../menu-item/menu-item.conponent';
import './directory.styles.scss';
import ImgHat from './img/hat.jpg';
import Jacket from './img/jacket.jpg'; 
import Sneakers from './img/sneakers.jpg'; 
import Women from './img/women.jpg'; 
import Men from './img/men.jpg'; 

class Directory extends React.Component {
    constructor() {
        super();
        this.state = {
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
    }

    render() {
        return (
            <div className='directory-menu'>
                {
                    this.state.sections.map(({id, title, imageUrl, size}) => (
                        <MenuItem key={id} title={title} imageUrl={imageUrl} size={size}/>
                    ))
                }
            </div>
        )
    }
}

export default Directory;