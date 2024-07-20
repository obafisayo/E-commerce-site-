import React from 'react';
import PropTypes from 'prop-types';

function CardAbout({ heading, text, Services, highlight }) {
  return (
    <div className={`flex flex-col justify-center items-center p-4 my-[4rem] px-12 py-6 ${highlight ? 'bg-red-600 text-white' : 'border border-gray-300,'}`}>
      <img src={Services} alt="" className="mb-4" />
      <h2 className="text-2xl font-bold mb-2">{heading}</h2>
      <p className="text-center">{text}</p>
    </div>
  );
}

CardAbout.propTypes = {
  heading: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  Services: PropTypes.string.isRequired,
  highlight: PropTypes.bool,
};

CardAbout.defaultProps = {
  highlight: false,
};

export default CardAbout;
