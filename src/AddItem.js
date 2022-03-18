import React from "react";

export default function AddItem(props) {
  return (
    <form onSubmit={props.onFormSubmit}>
      <div className="p-4">
        <label htmlFor="item-name" className="sr-only">Название:</label>
        <input
          type="text"
          value={props.name}
          onChange={props.onNameChange}
          id="item-name"
          placeholder="Название товара"
          className="textfield border border-gray-500 text-gray-600 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 pl-10 p-2.5"
        />
      </div>
      <div className="p-4">
        <label htmlFor="item-description" className="sr-only">Описание:</label>
        <input
          type="text"
          value={props.desc}
          onChange={props.onDescChange}
          id="item-description"
          placeholder="Описание товара"
          className="textfield border border-gray-500 text-gray-600 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 pl-10 p-2.5"
        />
      </div>
      <div className="mx-4">
        <div className="text-red-700 p-3 my-2" role="alert">{props.valid}</div>
        <input type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" value="Добавить" />
      </div>
    </form>
  );
}
