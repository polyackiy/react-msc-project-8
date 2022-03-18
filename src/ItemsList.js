import React from "react";
import Item from "./Item";

export default function ItemsList(props) {
  return (
    <ul className="m-4">
      {props.items.map((item) => (
        <li className="my-8" key={item.id}>
          <Item info={item} />
          <button
            className="bg-red-400 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => props.onDeleteClick(item.id)}
          >
            Удалить
          </button>
        </li>
      ))}
    </ul>
  );
}
