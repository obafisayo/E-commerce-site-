import React from 'react'
import ItemsContainer from '../../../../components/itemscontainer/ItemsContainer'
import { categoryconfig } from './categoryconfig';

const Categories = () => {
  return (
    <section className="border-b-2">
      <div className="container mb-20 mt-14">
        <ItemsContainer
          productclass={"category1"}
          category={true}
          categoryconfig={categoryconfig}
          scrollbutton={true}
          title={"Categories"}
          subtitle={"Browse By Category"}
        />
      </div>
    </section>
  )
}

export default Categories;