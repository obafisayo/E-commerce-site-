import React from 'react'
import ItemsContainer from '../../../../components/itemscontainer/ItemsContainer';
import { productsconfig } from './config';

const ProductSection3 = () => {
  return (
    <section>
        <div className="container mb-20 mt-14">
          <ItemsContainer
            config={productsconfig}
            button={true}
            productclass={"products-container2"}
            scrollingdiv={true}
            scrollbutton={true}
            countdwn={false}
            title={"Our Products"}
            subtitle={"Explore Our Products"}
          />
        </div>
    </section>
  )
}

export default ProductSection3;
