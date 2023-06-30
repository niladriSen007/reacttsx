"use client"
import React from "react";

const page = () => {

const handleClick = (e:React.MouseEvent<HTMLButtonElement>) =>{
    e.preventDefault()
    console.log("Searched")
}

const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
    console.log(e.target.value)
}

const handleDelete = (e:React.MouseEvent<HTMLButtonElement>,id:number) =>{
    e.preventDefault()
    console.log(`${id} has been deleted `)
}



  return (
    <div className="eventExample p-4">
      <form>
        <input
          type="text"
          placeholder="Search for anything..."
          onChange={handleChange}
          className="border-2 border-black"
        />
        <button onClick={handleClick} className="bg-green-700 text-white p-1 rounded-md ml-2">Search</button>
      </form>
      <form className="post">
        <h1 className="text-2xl font-bold">Lorem ipsum dolor sit amet consectetur 1</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ullam
          voluptate quisquam voluptatibus magni voluptatum quasi eveniet totam
          harum neque itaque, eum reprehenderit non repellendus? Assumenda
          necessitatibus distinctio veniam eveniet.
        </p>
        <button className="bg-red-700 p-1 text-white rounded-md" onClick={(e) => handleDelete(e, 1)}>Delete</button>
        {/* <button>Delete</button> */}
      </form>
      <form className="post">
        <h1 className="text-2xl font-bold">Lorem ipsum dolor sit amet consectetur 2</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ullam
          voluptate quisquam voluptatibus magni voluptatum quasi eveniet totam
          harum neque itaque, eum reprehenderit non repellendus? Assumenda
          necessitatibus distinctio veniam eveniet.
        </p>
        <button className="bg-red-700 p-1 text-white rounded-md" onClick={(e) => handleDelete(e, 2)}>Delete</button>
        {/* <button>Delete</button> */}
      </form>
    </div>
  );
};

export default page;
