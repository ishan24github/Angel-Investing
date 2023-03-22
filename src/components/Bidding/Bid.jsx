import React, { Fragment, useState } from 'react'

const Bid = () => {

    // const [valuation, setNewValuation] = useState(0);
    const [bidders, setBidders] = useState([]);
    const [user , setUser] = useState("");
    const [price , setPrice] = useState("");
    const [percent, setPercent] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const valuation = 100/percent*price;
        const newBidder = {user, price, percent , valuation};
        setBidders([...bidders, newBidder]);
        setUser("");
        setPrice("");
        setPercent("");
        // setNewVlauation(100/percent*price);
    };

    const groupByValue = (array) => {
        const groups = {};
        array.forEach((item) => {
            if(!groups[item.valuation]){
                groups[item.valuation] = [];
            }
            groups[item.valuation].push(item);
        });
        return groups;
    };

    const groupedUsers = groupByValue(bidders);

  return (
    <div>
        <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />
        </label>
        <label>
          Value:
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </label>
        <label>
          percentage:
          <input
            type="number"
            value={percent}
            onChange={(e) => setPercent(e.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
        </form>
        <ul>
        {Object.keys(groupedUsers).map((group) => (
          <li key={group}>
            <h3>Evaluation : {group}</h3>
            <ul>
              {groupedUsers[group].map((item) => (
                <Fragment>
                        <li key={item.user}>Name : {item.user} |  price : {item.price} | percentage : {item.percent}</li>
                </Fragment>
                
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Bid