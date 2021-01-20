import React from 'react';

import Profile from "./components/Profile/Profile";
import Statistics from "./components/Statistics/Statistics";
import FriendList from "./components/FriendList/FriendList";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";

import user from "./json/user.json";
import statisticalData from "./json/statistical-data.json";
import friends from "./json/friends.json";
import transactions from "./json/transactions.json";



const App = () => {
  return (
   <div>
     <Profile 
     name={user.name}
     tag={user.tag}
     location={user.location}
     avatar={user.avatar}
     stats={user.stats}
     />
     _______________________________

     {/* <Statistics stats={statisticalData} /> */}
     <Statistics title="Upload stats" stats={statisticalData} />
     _______________________________

     <FriendList friends={friends} />
     _______________________________

     <TransactionHistory items={transactions} />;

    </div>
  );
}

export default App;
