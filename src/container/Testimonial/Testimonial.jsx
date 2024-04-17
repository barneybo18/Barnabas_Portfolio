import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

import { urlFor, client } from '../../client';
import { AppWrap, MotionWrap } from '../../wrapper';


import './Testimonial.scss';

// ... (other imports and code)

const Testimonial = () => {
  const [brands, setBrands] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = (index) => {
    setCurrentIndex(index);
  }

  useEffect(() => {
    const query = '*[_type == "feedback"]';
    const brandsQuery = '*[_type == "brands"]';

    client.fetch(query)
      .then((data) => {
        setTestimonials(data);
      })
      .catch((error) => {
        console.error('Error fetching testimonials:', error);
        // Handle error (e.g., set default values, show an error message)
      });

    client.fetch(brandsQuery)
      .then((data) => {
        setBrands(data);
      })
      .catch((error) => {
        console.error('Error fetching brands:', error);
        // Handle error (e.g., set default values, show an error message)
      });
  }, []); // Ensure to add dependencies if needed

  const test = testimonials.length > 0 ? testimonials[currentIndex] : null;

  return (
    <>
      {test && (
        <>
        <div className='app__testimonial-item app__flex'>
          <img src={urlFor(test.imageUrl)} alt="testimonial" />
          <div>
            <p className='p-text'>{test.feedback}</p>
            <div>
              <h4 className='bold-text'>{test.name}</h4>
              <h5 className='p-text'>{test.company}</h5>
            </div>
          </div>
        </div>

        <div className='app__testimonial-btns app__flex'>
          <div className='app__flex' onClick={() => handleClick(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)}>
            <HiChevronLeft />
          </div>
          <div className='app__flex' onClick={() => handleClick(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)}>
            <HiChevronRight />
          </div>

        </div>

        </>
      )}

      <div className='app__testimonial-brands app__flex'>
        {brands.map((brand) => (
          <motion.div
            whileInView={{opacity: [0, 1]}}
            transition={{duration: 0.5, type:'tween'}}
            key={brand._id}
          >
             <img src={urlFor(brand.imgUrl)} alt={brand.name}/>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Testimonial, 'app__testimonial'), 
  'testimonial',
  'app__primarybg'
);
