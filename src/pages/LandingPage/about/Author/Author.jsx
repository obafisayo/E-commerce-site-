import React from 'react';
import PropTypes from 'prop-types';

function Author({ MyImage, Heading, text, twitter, instagram, linkedin }) {
  return (
    <div>
      <div className="flex flex-col gap-4">
        <img src={MyImage} alt="" />
      </div>
      <h2 className='text-[32px] font-medium'>{Heading}</h2>
      <p className='text-[16px]'>{text}</p>
      <div className='flex flex-row gap-4 mt-3'>
        <img src={twitter} alt="" />
        <img src={instagram} alt="" />
        <img src={linkedin} alt="" />
      </div>
    </div>
  );
}


Author.propTypes = {
  MyImage: PropTypes.string.isRequired,
  Heading: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  twitter: PropTypes.string.isRequired,
  instagram: PropTypes.string.isRequired,
  linkedin: PropTypes.string.isRequired,
};

export default Author;
