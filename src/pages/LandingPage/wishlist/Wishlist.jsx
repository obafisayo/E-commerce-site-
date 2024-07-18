import React, { useContext } from 'react'
import ItemsContainer from '../../../components/itemscontainer/ItemsContainer'
import { relatedconfig } from '../../../config/relatedconfig'
import Productsbox from '../../../components/shared/productsbox/Productsbox'
import { WishContext } from '../../../contexts/wishcontext'

const Wishlist = () => {
  const { wishItemsArray, noOfWishItems } = useContext(WishContext);

  return (
    <main>
      <div className="container">
        <section className="mt-20">
          <div className="container">
            <ItemsContainer
              subtitle={`Wishlist (${noOfWishItems})`}
              button2={"Move All To Bag"}
            >
              {wishItemsArray && Array.isArray(wishItemsArray) && (
                <div className={`inline-flex gap-4 sm:flex-wrap`}>
                  {wishItemsArray.map((data, index) => (
                    <Productsbox key={index}
                    id={data.id}
                    discount={data.discount}
                    image={data.image}
                    name={data.name}
                    price={data.price}
                    slashprice={data.slashprice}
                    deleteicon={true}
                    />
                  ))}
                </div>
              )}
            </ItemsContainer>
          </div>
        </section>
        <section className="mt-20 mb-20">
          <div className="container">
            <ItemsContainer
              title={"Just For You"}
              button2={"See All"}
            >
              {relatedconfig && Array.isArray(relatedconfig) && (
                <div className={`inline-flex gap-4`}>
                  {relatedconfig.map((data, index) => (
                    <Productsbox key={index}
                    id={data.id}
                    discount={data.discount}
                    image={data.image}
                    name={data.name}
                    price={data.price}
                    rating={data.starRating}
                    slashprice={data.slashprice}
                    />
                  ))}
                </div>
              )}
            </ItemsContainer>
          </div>
        </section>
      </div>
    </main>
  )
}

export default Wishlist