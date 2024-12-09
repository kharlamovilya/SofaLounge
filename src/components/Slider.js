import './Slider.css';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';

const Footer = () => {
    const [index, setIndex] = useState(0);
    const [loaded, setLoaded] = useState(false);

    // Handle slide change
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    // Handle image load event to prevent the white space during transition
    const handleImageLoad = () => {
        setLoaded(true); // Set loaded to true when the image is fully loaded
    };

    return (
        <Carousel
            activeIndex={index}
            onSelect={handleSelect}
            interval={3000}
            fade={true} // Optional: Use fade effect for smoother transitions
            style={{ maxWidth: '100%', overflow: 'hidden' }}
        >
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://img.stablecog.com/insecure/1536w/aHR0cHM6Ly9iLnN0YWJsZWNvZy5jb20vNTVlNzdmYzgtZTY4MS00ZDExLTgwZDQtZDg4ZWEwMDU3MmEwLmpwZWc.webp"
                    alt="Slide 1"
                    style={{
                        height: '500px',
                        objectFit: 'cover',
                        display: loaded ? 'block' : 'none', // Hide the image until it is fully loaded
                    }}
                    onLoad={handleImageLoad} // Set loaded state on image load
                />
                <Carousel.Caption
                    style={{
                        backgroundColor: 'rgba(0, 123, 255, 0.7)',
                        padding: '15px',
                        borderRadius: '10px',
                    }}
                >
                    <h5>Slide 1 Title</h5>
                    <p>This is the first slide description.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://next-images.123rf.com/index/_next/image/?url=https://assets-cdn.123rf.com/index/static/assets/top-section-bg.jpeg&w=3840&q=75"
                    alt="Slide 2"
                    style={{
                        height: '500px',
                        objectFit: 'cover',
                        display: loaded ? 'block' : 'none', // Hide the image until it is fully loaded
                    }}
                    onLoad={handleImageLoad} // Set loaded state on image load
                />
                <Carousel.Caption
                    style={{
                        backgroundColor: 'rgba(0, 123, 255, 0.7)',
                        padding: '15px',
                        borderRadius: '10px',
                    }}
                >
                    <h5>Slide 2 Title</h5>
                    <p>This is the second slide description.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://img.stablecog.com/insecure/1536w/aHR0cHM6Ly9iLnN0YWJsZWNvZy5jb20vMDBiZTIxZDUtZjAxMy00ZmRkLTg0OTYtOTQ3YjQ1YTI0MTU1LmpwZWc.webp"
                    alt="Slide 3"
                    style={{
                        height: '500px',
                        objectFit: 'cover',
                        display: loaded ? 'block' : 'none', // Hide the image until it is fully loaded
                    }}
                    onLoad={handleImageLoad} // Set loaded state on image load
                />
                <Carousel.Caption
                    style={{
                        backgroundColor: 'rgba(0, 123, 255, 0.7)',
                        padding: '15px',
                        borderRadius: '10px',
                    }}
                >
                    <h5>Slide 3 Title</h5>
                    <p>This is the third slide description.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

//
//
export default Footer;