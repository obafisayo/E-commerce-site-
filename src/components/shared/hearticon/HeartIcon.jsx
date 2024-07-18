import React, { useContext } from 'react';
import { IoMdHeartEmpty } from "react-icons/io";
import { IoMdHeart } from "react-icons/io";
import { WishContext } from '../../../contexts/wishcontext';

const HeartIcon = ({ data, isInWishList }) => {
  const { addItemToWishList, removeItemFromWishList } = useContext(WishContext);

  const handleHeartClick = () => {
    if (!isInWishList) {
      addItemToWishList(data);
    } else {
      removeItemFromWishList(data);
    }
  };

  return (
    <div>
      {isInWishList ? (
        <IoMdHeart onClick={handleHeartClick} color="red" size={24} />
      ) : (
        <IoMdHeartEmpty onClick={handleHeartClick} color="black" size={24} />
      )}
    </div>
  );
};

export default HeartIcon;