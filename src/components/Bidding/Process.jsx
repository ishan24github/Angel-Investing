import React from "react";
import { useState } from 'react';

const Auction = () => {
  const [currentBid, setCurrentBid] = useState(0);
  const [highestBidder, setHighestBidder] = useState('');
  const [bidHistory, setBidHistory] = useState([]);

  const handleBid = (event) => {
    event.preventDefault();
    const newBid = parseInt(event.target.elements.bidInput.value);
    const bidderName = event.target.elements.bidderInput.value;


    // if(bidHistory.includes([]))
    console.log("hello");


    if (newBid !== currentBid) {
      // If the new bid is higher than the current bid, create a new group
      setCurrentBid(newBid);
      setHighestBidder(bidderName);
      setBidHistory(prevHistory => [...prevHistory, [{ bidder: bidderName, amount: newBid }]]);
    } else if (newBid === currentBid) {
      // If the new bid is the same as the current bid, add it to the current group
      const lastGroupIndex = bidHistory.length - 1;
      setBidHistory(prevHistory => {
        const lastGroup = prevHistory[lastGroupIndex];
        return [
          ...prevHistory.slice(0, lastGroupIndex),
          [...lastGroup, { bidder: bidderName, amount: newBid }],
        ];
      });
    }else {
      alert('Your bid must be higher than the current bid.');
    }

    event.target.reset();
  };

  return (
    <div>
      <h2>Auction</h2>
      <p>Current bid: {currentBid}</p>
      {highestBidder && <p>Highest bidder: {highestBidder}</p>}
      <h3>Bid history</h3>
      <ul>
        {bidHistory.map((group, groupIndex) => (
          <li key={groupIndex}>
            {group.map((bid, bidIndex) => (
              <p key={bidIndex}>
                <strong>{bid.bidder}</strong> bid {bid.amount}
              </p>
            ))}
          </li>
        ))}
      </ul>
      <form onSubmit={handleBid}>
        <label>
          Bidder Name:
          <input type="text" name="bidderInput" required />
        </label>
        <label>
          Bid Amount:
          <input type="number" name="bidInput" required />
        </label>
        <button type="submit">Place Bid</button>
      </form>
    </div>
  );
};

export default Auction;
