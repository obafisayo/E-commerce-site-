import React from 'react'
import ItemsContainer from '../../../../components/itemscontainer/ItemsContainer';
import { productsconfig } from './config';

const ProductSection2 = () => {
  return (
    <section>
        <div className="container mb-20 mt-14">
          <ItemsContainer
            config={productsconfig}
            button1={true}
            title={"This Month"}
            subtitle={"Best Selling Products"}
          />
        </div>
    </section>
  )
}

export default ProductSection2;
