import React, { useContext } from 'react';
import { IoTrashOutline } from 'react-icons/io5';
import { WishContext } from '../../../contexts/wishcontext';

const DeleteIcon = ({ data }) => {
  const { removeItemFromWishList } = useContext(WishContext);

  const handleDeleteClick = () => {
      removeItemFromWishList(data);
  };

  return (
    <div>
      <IoTrashOutline size={24} onClick={handleDeleteClick}/>
    </div>
  );
};

export default DeleteIcon;