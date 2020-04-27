import React from 'react'
import 'bulma/css/bulma.css';
import '../formfield/FormField.css'

export default function FormField(props) {

    return (
        <div className='mywidth400'>
            <div class="field">
                <label class="label">{props.label}</label>
                <div class="control">
                    <input class="input" type={props.type} placeholder={props.placeholder} />
                </div>
            </div>

        </div>
    )
}
