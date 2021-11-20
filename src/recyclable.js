import React from 'react'
import Header from './Header'
import './recyclable.css'
function Recyclable() {
    return (
        <div>
            <Header/>
            <div className="recycle_heading">
            <h1 className="heading"> RECYCLABLE WASTE </h1></div>
            <div className="content">
                <p>Recycling, recovery and reprocessing of waste materials for use in new products. The basic phases in recycling are the collection of waste materials, their processing or manufacture into new products, and the purchase of those products, which may then themselves be recycled. Typical materials that are recycled include iron and steel scrap, aluminum cans, glass bottles, paper, wood, and plastics. The materials reused in recycling serve as substitutes for raw materials obtained from such increasingly scarce natural resources as petroleum, natural gas, coal, mineral ores, and trees. Recycling can help reduce the quantities of solid waste deposited in landfills, which have become increasingly expensive. Recycling also reduces the pollution of air, water, and land resulting from waste disposal.</p></div>
                <img className="a" src="https://thesafegroup.co.uk/wp-content/uploads/2020/08/recyclable-waste-collection-v1.jpg"/>
        </div>
        
        
    )
}

export default Recyclable
