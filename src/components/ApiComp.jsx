import React, { useEffect, useState } from "react";

const ApiComp = () => {
  const [mainData, setMainData] = useState([]);

  const getUsers = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    setMainData(data);
  };

  useEffect(() => {
    setTimeout(() => {
        getUsers();
    },3000)
  }, []);

  return !mainData.length > 0 ? (<div className="h-[40vh] w-[50vw] bg-gray-200"></div>) : (
    <>
        <table>
            <tr>
                <th>Sr no</th>
                <th>Name</th>
                <th>UserName</th>
                <th>Email</th>
                <th>Address</th>
            </tr>
            {
               mainData.map((val, i) => {
                return(
                    <tr>
                        <td>{i + 1}</td>
                        <td>{val.name}</td>
                        <td>{val.userName}</td>
                        <td>{val.email}</td>
                        <td>{val.address.street}, {val.address.city}, {val.address.zipcode}</td>
                    </tr>
                );
               }) 
            }
        </table>

    </>
  )
};

export default ApiComp;
