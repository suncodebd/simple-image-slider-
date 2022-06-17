import { useRef } from 'react';
import { BsArrowLeftShort, BsArrowRightShort, BsInstagram } from 'react-icons/bs';
import { SubHeading } from '../../components';
import './Gallery.css';

import { images } from '../../constants';

const image = [images.gallery01, images.gallery02, images.gallery03, images.gallery04];

function Gallery() {
    const scrollRef = useRef(null);
    const scroll = (direction) => {
        const { current } = scrollRef;

        if (direction === 'left') {
            current.scrollLeft -= 300;
        } else {
            current.scrollLeft += 300;
        }
    };

    return (
        <div className="app__gallery flex__center">
            <div className="app__gallery-content">
                <SubHeading Title="Instagram" />
                <h1 className="headtext__cormorant">Photo Gallery</h1>
                <p
                    className="p__opensans"
                    style={{ color: '#aaa', marginTop: '2rem', marginBottom: '1rem' }}
                >
                    Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Volutpat Mattis Ipsum
                    Turpis Elit Elit Scelerisque Egestas Mu.
                </p>
                <button type="button" className="custom__button">
                    View More
                </button>
            </div>

            <div className="app__gallery-images">
                <div className="app__gallery-images_container" ref={scrollRef}>
                    {image.map((img) => (
                        <div className="app__gallery-images_card flex__center" key={Math.random()}>
                            <img src={img} alt="gallery_img" />
                            <BsInstagram className="gallery_icon" />
                        </div>
                    ))}
                </div>

                <div className="app__gallery-images_arrow">
                    <BsArrowLeftShort
                        className="gallery__arrow-icon"
                        onClick={() => scroll('left')}
                    />
                    <BsArrowRightShort
                        className="gallery__arrow-icon"
                        onClick={() => scroll('right')}
                    />
                </div>
            </div>
        </div>
    );
}

export default Gallery;
