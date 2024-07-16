import React, { useState } from 'react'
import ItemsContainer from '../../../../components/itemscontainer/ItemsContainer'
import { categoryconfig } from './categoryconfig';
import Categorybox from '../../../../components/shared/categorybox/Categorybox';

const Categories = () => {
  const [clickedstate, setClickedstate] = useState(() => {
    if (categoryconfig) {
      let clickarray = new Array(categoryconfig.length).fill(false)
      clickarray.splice(0, 1, true)
      return clickarray
    } else {
      return []
    }
  });

  const handleClick = (index) => {
    setClickedstate(clickedstate.fill(false))
    setClickedstate((prevStates) => prevStates.map((state, idx) => idx === index ? !state : state));
  };
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
        >
          {Array.isArray(categoryconfig) &&
            <div className="flex items-center justify-between gap-2">
              {categoryconfig.map((item, index) => (
                <Categorybox key={index}
                  clickedclass={clickedstate[index]}
                  handler={() => handleClick(index)}
                  icon={item.icon} name={item.name}
                />
              ))}
            </div>
          }
        </ItemsContainer>
      </div>
    </section>
  )
}

export default Categories;