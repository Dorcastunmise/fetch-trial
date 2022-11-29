import React from 'react'

const Card = ([team_key, team_name, team_badge, players, coaches]) => {
  return (
    <div className='cardData'>
        <div>
            <p>Team key: <b>{team_key}</b></p>
            <img src={team_badge} alt="title" />
            <div style={{textAlign:'center'}}>
                Coach name: <b>{coaches}</b>
            </div>
        </div>
        <div className='product_content'>
            <h3>{team_name}
            </h3>
            <p>{players}</p>

        </div>
    </div>
  )
}

export default Card