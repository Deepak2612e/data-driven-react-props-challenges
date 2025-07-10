import React from 'react'

const FilterableList = ({items,filterCategory}) => {
  return (
    <div>

        <ul>
            {  items
                .filter(item => !filterCategory || item.category === filterCategory)
                .map((item,index) =>
                <li key={index}>ID : {item.id} Name : {item.name} Category : {item.category}</li>
                )
            }
        </ul>
    </div>
        
  )
}

export default FilterableList