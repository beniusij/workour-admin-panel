import React from 'react'

const Button = (props) => {
  let style = {
    fontFamily: 'Roboto',
    fontSize: 14,
    padding: "5px 20px",
    border: "1px black solid",
    borderRadius: 5,
    backgroundColor: "transparent"
  }

  return (
    <button style={style} className={props.class} type={props.type}>
      {props.text}
    </button>
  )
}

export default Button