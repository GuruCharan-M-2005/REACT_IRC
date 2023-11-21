import React from 'react'

export default function KeyList() {
    const List = [
        {id:'a',value:'apple'},
        {id:'b',value:'mango'},
        {id:'c',value:'orange'}
    ];
    const ListItem=List.map((name)=>
        <li key={name.id}>
            {name.value}
        </li>
    );
    return (
      <div>
          <ul>
              {ListItem}
          </ul>
      </div>
    )
}
