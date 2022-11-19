import React from 'react'

export default function Button() {

    const btn_style = {
        boder: '1px solid green',
        backgroundColor: 'green',
        color: 'white',
        padding: '10px'
    }
  return (
    <div>
        <button style={btn_style }>Knopka</button>
    </div>
  )
}
