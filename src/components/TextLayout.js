import React from 'react'

function createMarkup(text) {
  return { __html: text }
}

const TextLayout = (props) => {
  return (
    <div className="text" style={props.style}>
      <small>
        <i>{props.title}</i>
      </small>
      <div dangerouslySetInnerHTML={createMarkup(props.content)} />
      <small>added by {props.author}</small>
    </div>
  )
}

export default TextLayout
