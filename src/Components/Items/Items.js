import React from 'react';
import useItems from '../../hooks/useItems';
import Item from '../Item/Item';

const Items = () => {
    const [items]=useItems()
    return (
        <div className="gradient-custom py-5">
            <p>this is item :{items.length}</p>
           <div className='container'>
           <div className=' row row-cols-1 row-cols-lg-3 g-2 g-lg-3 w-75 mx-auto '>
               {
                    items.map(item=><Item 
                    key={item._id}
                    item={item}
                    ></Item>)
                }
               </div>
           </div>
        </div>
    );
};

export default Items;