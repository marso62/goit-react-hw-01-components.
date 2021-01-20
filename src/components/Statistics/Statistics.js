import React from "react";
import PropTypes from "prop-types";

import style from "./Statistics.module.css";

function generateColor() {
    return '#' + (Math.random().toString(16) + '000000').substring(2,8).toUpperCase()
  }
  


const Statistics = ({ title, stats }) => (
        <section className={style.statistics}>
            {title ? <h2 className={style.title}>{title}</h2> : null}


  <ul className={style.statList}>
      {stats.map(({id, label, percentage}) => (
          <li className={style.item}
          style={{backgroundColor: generateColor() }}
          key={id}>
          <span className={style.label}>{label}</span>
          <span className={style.percentage}>{percentage}%</span>
        </li>
      ))}
    
  </ul>
</section>
    )

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired
        })
      ).isRequired,

}

export default Statistics;