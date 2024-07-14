import React from 'react'
import ItemsContainer from '../../../../components/itemscontainer/ItemsContainer';
import { productsconfig } from './config';

const ProductSection1 = () => {
  return (
    <section className="border-b-2">
      <div className="container mb-20 mt-14">
        <ItemsContainer
          config={productsconfig}
          button={true}
          productclass={"procducts-container1"}
          scrollingdiv={true}
          scrollbutton={true}
          countdwn={true}
          title={"Today's"}
          subtitle={"Flash Sales"}
        />
      </div>
    </section>
  )
}

export default ProductSection1;
