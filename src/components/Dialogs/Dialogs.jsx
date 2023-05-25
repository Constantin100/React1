import React from 'react';
import s from './Dialogs.module.css'
import { NavLink } from 'react-router-dom';


const DialogItem = (props) => {

    let path = "/dialogs/" + props.id

    return (
        <div className={s.dialogs + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={s.dialog}>{props.message}</div>
    )
}

const Dialogs = (props) => {

    let dialogs = [
        { id: 1, name: 'Dimych' },
        { id: 2, name: 'Andrey1' },
        { id: 3, name: 'Sveta2' },
        { id: 4, name: 'Sasha3' },
        { id: 5, name: 'Victor' },
        { id: 6, name: 'Valera' },
    ]

    let messages = [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'Yo' },
        { id: 3, message: 'Hi, how r u?' },
        { id: 4, message: 'Hi1' },
        { id: 5, message: 'Yo1' },
        { id: 6, message: 'Hi, how r u?2' },
    ]

    let dialogsElements = dialogs
        .map(d => <DialogItem name={d.name} id={d.id} />)

    let messagesElements = messages
        .map(m => <Message message={m.message} id={m.id} />)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;