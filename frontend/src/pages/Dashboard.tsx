import React from 'react'
import '../styles/sass/components/_card.scss'

function Dashboard() {
  return (
    <div className='container'>
      <div className='caption'>
        <h1>React x Laravel</h1>
        <p>Click Me!</p>
      </div>
      <section className='card'>
        <button className='title'>Click Me!</button>
        <p className='detail'>0</p>
        <p className='footer'>12:00:01 Saturday 1/22/2023</p>
      </section>
    </div>
  )
}

export default Dashboard
