import React from 'react'
import s from './index.module.css'

export default function AddTeamForm() {
  return (
    <form className={s.add_team_form}>
        <p>Add team</p>
        <input type='text' name='team_title' placeholder="Team's title" />
        <button>Add team</button>
    </form>
  )
}
