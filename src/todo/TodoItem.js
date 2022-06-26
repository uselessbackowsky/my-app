import React, {useContext} from "react";
import PropTypes from "prop-types"
import Context from "../context"


const styles = {
    li: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding:'.5rem 1rem',
        border: '1px solid #ccc',
        borderRadius: '4px',
        marginBottom :'.5rem'
    },
    input: {
        marginRight: '1rem'
    }
}

function TodoItem ({el,index, onChange}) {
    const {removeTodo} = useContext(Context)
    const classes = []
    
    if (el.completed) {
        classes.push('done')
    }

    return <li style={styles.li}>
        <span className={classes.join(' ')}>
            <input style = {styles.input} 
            type="checkbox" 
            checked = {el.completed} 
            onChange={()=> {onChange(el.id)}}/> 
            &nbsp;
            {el.title}
        </span>
        <button className="btn" onClick={removeTodo.bind(null,el.id)}>&times;</button>
        </li>
}

TodoItem.propTypes = {
    el: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired
}

export default TodoItem