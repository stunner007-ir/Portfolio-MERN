import React from "react";

function Home() {
  return (
    <>
      <div className="flex items-center">
        <div className="flex-1 p-6">
          {" "}
          <h2 className="text-gray-600 text-3xl font-bold ">
            Welcome to{" "}
            <span className="text-3xl font-bold text-purple-500">Ishu Raj</span>
          </h2>
          <p className="text-sm text-gray-700 font-medium leading-relaxed">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum,
            sint perspiciatis incidunt autem obcaecati eligendi magnam, debitis
            adipisci sequi dolor molestias placeat distinctio beatae tempora!
            Nesciunt cum numquam totam deleniti!
          </p>
          <div className="p-2 my-3">
            <button className="bg-blue-500 rounded   mr-2">Youtube</button>
            <button className="bg-blue-500 rounded">Youtube</button>
          </div>
        </div>
        <div className="flex-1 p-3">
          <img
            className="w-64 h-80 object-cover"
            src="src/assets/IMG_20221208_100509.jpg"
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default Home;
