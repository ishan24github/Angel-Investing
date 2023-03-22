
import React, { useState } from "react";

const Grouping = () => {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = { name, value };
    setUsers([...users, newUser]);
    setName("");
    setValue("");
  };

  const groupByValue = (array) => {
    const groups = {};
    array.forEach((item) => {
      if (!groups[item.value]) {
        groups[item.value] = [];
      }
      groups[item.value].push(item);
    });
    return groups;
  };

  const groupedUsers = groupByValue(users);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Value:
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      <ul>
        {Object.keys(groupedUsers).map((group) => (
          <li key={group}>
            <h3>{group}</h3>
            <ul>
              {groupedUsers[group].map((user) => (
                <li key={user.name}>{user.name}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Grouping;

// import React, { useState } from "react";

// function App() {
//   const [users, setUsers] = useState([]);
//   const [name, setName] = useState("");
//   const [value, setValue] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const newUser = { name, value };
//     setUsers([...users, newUser]);
//     setName("");
//     setValue("");
//   };

//   const groupByValue = (array) => {
//     const groups = {};
//     array.forEach((item) => {
//       if (!groups[item.value]) {
//         groups[item.value] = [];
//       }
//       groups[item.value].push(item);
//     });
//     return groups;
//   };

//   const groupedUsers = groupByValue(users);

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Name:
//           <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
//         </label>
//         <label>
//           Value:
//           <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
//         </label>
//         <button type="submit">Submit</button>
//       </form>
//       <ul>
//         {Object.keys(groupedUsers).map((group) => (
//           <li key={group}>
//             <h3>{group}</h3>
//             <ul>
//               {groupedUsers[group].map((user) => (
//                 <li key={user.name}>{user.name}</li>
//               ))}
//             </ul>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;
