import React, { useState } from 'react';
import Breadcrumb from '../../../components/breadcrumb/Breadcrumb';
import Profile from './profile/Profile';
import AddressBook from './addressbook/AddressBook';
import PaymentOptions from './paymentoptions/PaymentOptions';
import Returns from './returns/Returns';
import Cancellations from './cancellations/Cancellations';
import { useNavigate } from 'react-router-dom';
import { WISHLIST } from '../../../routes/RouteConstants';

const Account = () => {
  const navigate = useNavigate();
  const user = {
    firstname: "Obafisayo",
    lastname: "Abimbola",
    email: "abimbolaobafisayo@gmail.com",
    address: "Ikotun, Lagos, Nigeria"
  };

  const [activeLink, setActiveLink] = useState('profile');

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <main>
      <div className="container">
        <div className="container flex items-center justify-between">
          <Breadcrumb />
          <h1 className="mt-20">
            Welcome!
            <span className="text-brandRed">{" " + user.lastname + " " + user.firstname}</span>
          </h1>
        </div>
        <section className="mt-16">
          <div className="container flex">
            <div className="w-1/4">
              <div className="flex flex-col gap-4">
                <h1 className="font-medium text-lg">Manage My Account</h1>
                <div className="flex flex-col gap-1 ml-10 mb-3">
                  <button
                    className={`text-start text-gray-500 ${activeLink === 'profile' ? 'text-red-500' : ''}`}
                    onClick={() => handleLinkClick('profile')}
                  >
                    My Profile
                  </button>
                  <button
                    className={`text-start text-gray-500 ${activeLink === 'address-book' ? 'text-red-500' : ''}`}
                    onClick={() => handleLinkClick('address-book')}
                  >
                    Address Book
                  </button>
                  <button
                    className={`text-start text-gray-500 ${activeLink === 'payment-options' ? 'text-red-500' : ''}`}
                    onClick={() => handleLinkClick('payment-options')}
                  >
                    My Payment Options
                  </button>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <h1 className="font-medium text-lg">My Orders</h1>
                <div className="flex flex-col gap-1 ml-10 mb-3">
                  <button
                    className={`text-start text-gray-500 ${activeLink === 'returns' ? 'text-red-500' : ''}`}
                    onClick={() => handleLinkClick('returns')}
                  >
                    My Returns
                  </button>
                  <button
                    className={`text-start text-gray-500 ${activeLink === 'cancellations' ? 'text-red-500' : ''}`}
                    onClick={() => handleLinkClick('cancellations')}
                  >
                    My Cancellations
                  </button>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <button className="text-start" onClick={() => navigate(WISHLIST)}>
                  <h1 className="font-medium text-lg">My WishList</h1>
                </button>
              </div>
            </div>
            <div className="flex flex-col shadow-lg py-12 px-20 w-3/4 gap-4">
              {activeLink === 'profile' && (
                <div>
                  <h1 className="text-brandRed text-xl font-medium">Edit Your Profile</h1>
                  <Profile user={user} />
                </div>
              )}
              {activeLink === 'address-book' && (
                <div>
                  <h1 className="text-brandRed text-xl font-medium">Edit Your Address Book</h1>
                  <AddressBook user={user} />
                </div>
              )}
              {activeLink === 'payment-options' && (
                <div>
                  <h1 className="text-brandRed text-xl font-medium">Edit Your Payment Options</h1>
                  <PaymentOptions user={user} />
                </div>
              )}
              {activeLink === 'returns' && (
                <div>
                  <h1 className="text-brandRed text-xl font-medium">My Returns</h1>
                  <Returns user={user} />
                </div>
              )}
              {activeLink === 'cancellations' && (
                <div>
                  <h1 className="text-brandRed text-xl font-medium">My Cancellations</h1>
                  <Cancellations user={user} />
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Account;