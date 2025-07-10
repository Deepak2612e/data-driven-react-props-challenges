import React from 'react'

const Recipe = ({ name, ingredients, instruction}) => {
  return (
    <div>
        <h2>{name}</h2>
        <ul>
            {ingredients.map((ingredient,index) => 
                <li key={index}>{ingredient}</li>
            )}
        </ul>
        {instruction.split(". ").map((ins,index) =>
            <p key={index}>{ins}</p> 
        )}
    </div>
  )
}

export default Recipe