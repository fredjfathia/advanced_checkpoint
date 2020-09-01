import React from 'react';
import './table.css' ;
import PropTypes from 'prop-types';
function ProductTable(props){
    const title= (
   <tr>
    <th>Name</th>
    <th>Category</th> 
    <th>Price(TD)</th>
    </tr> 
   );
    const tab = props.products.map((el) =>
   <tr>
    <td>{el.name}</td>
    <td>{el.category}</td>
    <td>{el.price}</td>
    </tr>
    
  
);
return(
<div>
<h1>List of products</h1>
    <br></br>
<table>
{title}
{tab}
</table>
</div>
)
  }
  ProductTable.prototype={
      products : PropTypes.arrayOf(
         {name : PropTypes.string,
          category : PropTypes.string,
          price : PropTypes.number,
         })
    }
  
export default ProductTable ;
