import React, { useState } from "react";

export default function Item(props) {
  const [total, setTotal] = useState(0);

  const { info } = props;

  function handleAddClick() {
    setTotal(total + 1);
  }

  function handleRemoveClick() {
    if (total > 0) {
      setTotal(total - 1);
    }
  }

  if (!info) {
    return null;
  }

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg p-4">
      <div className="item-info">
        <h2 className="text-neutral-900 font-bold text-xl mb-2">{info.name}</h2>
        <p className="text-gray-500">{info.desc}</p>
      </div>
      <div className="item-quantity my-2 inline-flex">
        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
          disabled={total === 0}
          onClick={handleRemoveClick}
        >
          -
        </button>
        <h3 className="item-total mx-4 my-2">{total ? total : "0"}</h3>
        <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r" onClick={handleAddClick}>
          +
        </button>
      </div>
    </div>
  );
}
