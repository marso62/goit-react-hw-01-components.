import React from "react";
import PropTypes from "prop-types";

import style from "./FriendList.module.css";

const FriendList = ({ friends }) => (
<ul className={style.friendList}>
    {friends.map(({avatar, name, isOnline, id}) => (
        <li className={style.item}
        key={id}>
        <span className={isOnline ? style.statusOn : style.statusOff}>{isOnline}</span>
        <img className={style.avatar} src={avatar} alt="" width="48" />
        <p className={style.name}>{name}</p>
      </li>
    ))}
</ul>
    )

FriendList.propTypes={
    friends: PropTypes.arrayOf(
        PropTypes.exact({
          id: PropTypes.number.isRequired,
          avatar: PropTypes.string.isRequired,
          name: PropTypes.string.isRequired,
          isOnline: PropTypes.bool.isRequired,
        })
      ).isRequired,
}    

    export default FriendList;