import React from 'react';

export default function Emoji(props) {
    const size = props.size;
  return (
    <span
    className="emoji"
    role="img"
    aria-label={props.label ? props.label : ""}
    aria-hidden={props.label ? "false" : "true"}
    style={{fontSize: size}}
    
>
    {props.symbol}
</span>
  )
}
