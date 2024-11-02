import React from 'react';

const ItemList = ({listItem, setSelected}) => {
    return(
        <div>
            {listItem}
            <button onClick={() => setSelected(listItem)}>Select</button>
        </div>
    )
}

export default ItemList