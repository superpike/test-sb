import React from 'react';
import { Link } from 'react-router-dom';

import classes from './FundsItem.module.css';

const fundsItem = (props) => (
    <Link  to={`/funds/${props.id}`} className={classes.wrapper}>
        <div className={classes.name}>
            {props.name}
        </div>
        <div className={classes.description}>
            {props.description_short.length <= 34 ? props.description_short : props.description_short.substring(0,32)+'...'}
        </div>
        <div className={classes.imageWrapper}>
            <img className={classes.image} src={props.image} alt='fund' />
        </div>
    </Link>
);

export default fundsItem;