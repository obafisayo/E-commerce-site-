import React from 'react'
import ItemsContainer from '../../../../components/itemscontainer/ItemsContainer';
import { productsconfig } from './config';
import Productsbox from '../../../../components/shared/productsbox/Productsbox';

const ProductSection1 = () => {
  return (
    <section className="border-b-2">
      <div className="container mb-20 mt-14">
        <ItemsContainer
          button={true}
          productclass={"procducts-container1"}
          scrollbutton={true}
          countdwn={true}
          title={"Today's"}
          subtitle={"Flash Sales"}
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

export default ProductSection1;
