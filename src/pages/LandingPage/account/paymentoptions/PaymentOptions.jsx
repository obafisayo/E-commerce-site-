import React, { useState } from 'react';

const PaymentOptions = () => {
  const [paymentOptions, setPaymentOptions] = useState([
    { id: 1, type: 'Credit Card', cardNumber: '1234 5678 9012 3456', expirationDate: '12/24', cvv: '123' },
    { id: 2, type: 'Debit Card', cardNumber: '4321 8765 2109 8765', expirationDate: '06/25', cvv: '456' },
    { id: 3, type: 'PayPal', email: 'example@email.com' },
  ]);

  const [editingOption, setEditingOption] = useState(null);

  const handleEdit = (option) => {
    setEditingOption(option);
  };

  const handleSave = (updatedOption) => {
    const updatedOptions = paymentOptions.map((option) =>
      option.id === updatedOption.id ? updatedOption : option
    );
    setPaymentOptions(updatedOptions);
    setEditingOption(null);
  };

  const handleCancel = () => {
    setEditingOption(null);
  };

  return (
    <div className="bg-gray-100 py-8 px-4 sm:px-6 lg:px-8 mt-10">
      <div className="space-y-4">
        {paymentOptions.map((option) => (
          <div key={option.id} className="bg-white shadow-md rounded-lg p-4">
            {editingOption && editingOption.id === option.id ? (
              <EditPaymentOption
                option={editingOption}
                onSave={handleSave}
                onCancel={handleCancel}
              />
            ) : (
              <ViewPaymentOption option={option} onEdit={() => handleEdit(option)} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const ViewPaymentOption = ({ option, onEdit }) => {
  return (
    <div>
      <p className="font-medium mb-2">Type: {option.type}</p>
      {option.type === 'Credit Card' && (
        <>
          <p className="mb-1">Card Number: {option.cardNumber}</p>
          <p className="mb-1">Expiration Date: {option.expirationDate}</p>
          <p className="mb-4">CVV: {option.cvv}</p>
        </>
      )}
      {option.type === 'Debit Card' && (
        <>
          <p className="mb-1">Card Number: {option.cardNumber}</p>
          <p className="mb-1">Expiration Date: {option.expirationDate}</p>
          <p className="mb-4">CVV: {option.cvv}</p>
        </>
      )}
      {option.type === 'PayPal' && (
        <p className="mb-4">Email: {option.email}</p>
      )}
      <button
        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
        onClick={onEdit}
      >
        Edit
      </button>
    </div>
  );
};

const EditPaymentOption = ({ option, onSave, onCancel }) => {
  const [updatedOption, setUpdatedOption] = useState({ ...option });

  const handleInputChange = (e) => {
    setUpdatedOption({ ...updatedOption, [e.target.name]: e.target.value });
  };

  const handleSaveClick = () => {
    onSave(updatedOption);
  };

  return (
    <div>
      {option.type === 'Credit Card' && (
        <div className="space-y-2">
          <input
            className="border-gray-300 rounded-md px-3 py-2 w-full"
            name="cardNumber"
            value={updatedOption.cardNumber}
            onChange={handleInputChange}
          />
          <input
            className="border-gray-300 rounded-md px-3 py-2 w-full"
            name="expirationDate"
            value={updatedOption.expirationDate}
            onChange={handleInputChange}
          />
          <input
            className="border-gray-300 rounded-md px-3 py-2 w-full"
            name="cvv"
            value={updatedOption.cvv}
            onChange={handleInputChange}
          />
        </div>
      )}
      {option.type === 'Debit Card' && (
        <div className="space-y-2">
          <input
            className="border-gray-300 rounded-md px-3 py-2 w-full"
            name="cardNumber"
            value={updatedOption.cardNumber}
            onChange={handleInputChange}
          />
          <input
            className="border-gray-300 rounded-md px-3 py-2 w-full"
            name="expirationDate"
            value={updatedOption.expirationDate}
            onChange={handleInputChange}
          />
          <input
            className="border-gray-300 rounded-md px-3 py-2 w-full"
            name="cvv"
            value={updatedOption.cvv}
            onChange={handleInputChange}
          />
        </div>
      )}
      {option.type === 'PayPal' && (
        <input
          className="border-gray-300 rounded-md px-3 py-2 w-full"
          name="email"
          value={updatedOption.email}
          onChange={handleInputChange}
        />
      )}
      <div className="mt-4 space-x-2">
        <button
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
          onClick={handleSaveClick}
        >
          Save
        </button>
        <button
          className="bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded-md"
          onClick={onCancel}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default PaymentOptions;