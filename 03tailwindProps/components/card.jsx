import React from "react";

function Card(props) {
  console.log("PROPS", props);
  return (
    <div className="flex flex-col bg-white border border-gray-200 shadow-2xs rounded-xl">
      <img
        className="w-full h-auto rounded-t-xl"
        src="https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&q=80"
        alt="Card Image"
      />
      <div className="p-4 md:p-5">
        <h3 className="text-lg font-bold text-gray-800">{props.userName}</h3>
        <p className="mt-1 text-gray-500">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a
          className="mt-2 py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-hidden focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
          href="#"
        >
          Go somewhere
        </a>
      </div>
    </div>
  );
}

export default Card;
