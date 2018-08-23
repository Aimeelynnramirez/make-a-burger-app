import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';


function refreshPage(){ 
    var initialPage = window.location.pathname;
    window.location.replace(
        ('/build' + initialPage));
    }

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' },
];

const buildControls = (props) => (
    <div className={classes.BuildControls}>
 
        {controls.map(ctrl => (
            <BuildControl 
                key={ctrl.label} 
                label={ctrl.label}
                added={() => props.ingredientAdded(ctrl.type)}
                removed={() => props.ingredientRemoved(ctrl.type)}
                disabled={props.disabled[ctrl.type]} />
        ))}
       <p className={classes.Boxes}> 
       <button 
            className={classes.RedoOrderButton}
            disabled={!props.purchasable}
            type="button" 
            onClick={ refreshPage }
            > 
            <span>REDO ORDER</span> </button> 
          
            <p className={classes.Box}>Current Price: <strong>{props.price.toFixed(2)}</strong>
            </p>
            <button 
            className={classes.OrderButton}
            disabled={!props.purchasable}
            onClick={props.ordered}>ORDER NOW</button>   
            
            </p>
 
    </div>
);

export default buildControls;