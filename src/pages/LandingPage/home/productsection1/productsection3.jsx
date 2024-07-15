import React from 'react'
import ItemsContainer from '../../../../components/itemscontainer/ItemsContainer';
import { productsconfig } from './config';
import Productsbox from '../../../../components/shared/productsbox/Productsbox';

const ProductSection3 = () => {
  return (
    <section>
        <div className="container mb-20 mt-14">
          <ItemsContainer
            button={true}
            productclass={"products-container2"}
            scrollbutton={true}
            countdwn={false}
            title={"Our Products"}
            subtitle={"Explore Our Products"}
          >
            {productsconfig && Array.isArray(productsconfig) && (
              <div className={`inline-flex gap-4`}>
                {productsconfig.map((data, index) => (
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
  )
}

export default ProductSection3;
