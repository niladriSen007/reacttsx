"use client"
import React, { useState } from "react";

interface UserType{
    sessionId:number,
    name:string

}

const page = () => {

     const [userName,setUserName] = useState("")
     const [user,setUser] = useState<UserType | null>()

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setUserName(e.target.value)
    }
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) =>{
        e.preventDefault();
        setUser({
            sessionId:Math.random(),
            name:userName
        })
        setUserName("")
    }

  return (
    <div className="w-100 justify-center items-center flex flex-col h-[40vw] ">
        <h1> User Name = {user?.name}</h1>
      <form>
        <input className="border-2 border-black" type="text" placeholder="Username" onChange={handleChange} value={userName}/>
        <button className="bg-green-700 text-white p-1 rounded-md ml-2" onClick={handleClick}>Login</button>
      </form>
    </div>
  );
};

export default page;
