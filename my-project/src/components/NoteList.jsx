import React, { useContext } from 'react'
import { Context } from '../Context/Cotext'

export const NoteList = () => {
    const {state} = useContext(Context);
  return (
    <ul>
        {state.map((note) => <li key={note.id}>
            {note.body}
        </li>)}
    </ul>
  )
}
