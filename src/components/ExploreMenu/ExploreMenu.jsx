import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

const ExploreMenu = (category,setCategory) => {
  return (
    <div className='explore-menu' id= 'explore-menu'>
      <h1>Explore our Menu</h1>  
      <p className='explore-menu-text'>Experience Culinary Bliss with Our Wide-ranging Menu, Offering a Feast of Flavors from Near and Far. Savor Every Bite as You Explore a World of Delicious Delights, Each Dish a Journey of Taste.</p>
      <div className='explore-menu-list'>
        {menu_list.map((item,index)=>{
            return(
                <div onClick={() => setCategory(prev =>prev===item.menu_name?'All':item.menu_name)}key={index}className='explore-menu-list-item'>
                <img src={item.menu_image} alt={item.menu_name} />
                <p>{item.menu_name}</p>
            </div>
            
            )
        })}

      </div>
      <hr></hr>
    </div>
  )
}

export default ExploreMenu