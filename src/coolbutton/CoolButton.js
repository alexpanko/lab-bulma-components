import React, { Component } from 'react'
import 'bulma/css/bulma.css'

export default function CoolButton(props) {

    return (
        <div class="buttons">
            <button className={`${props.className}`}>{props.children}</button>
        </div>
    )
}
