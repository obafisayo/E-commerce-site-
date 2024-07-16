import React from 'react'
import ItemsContainer from '../../../../components/itemscontainer/ItemsContainer';
import { productsconfig } from './config';
import Productsbox from '../../../../components/shared/productsbox/Productsbox';

const ProductSection2 = () => {
  return (
    <section>
        <div className="container mb-20 mt-14">
          <ItemsContainer
            config={productsconfig}
            button1={true}
            title={"This Month"}
            subtitle={"Best Selling Products"}
          >
            {productsconfig && Array.isArray(productsconfig) && (
              <div className={`inline-flex gap-4 md:flex-wrap`}>
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

export default ProductSection2;
