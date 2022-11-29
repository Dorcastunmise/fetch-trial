import { useState, useEffect } from 'react'
import Card from'./Components/Card';

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch( "https://apiv3.apifootball.com/?action=get_teams&league_id=302&APIkey=0719f40c165c083129da23df41983d6a9998cc94c0f10463162bf6bc77825772")
    .then((response) => response.json())
    .then((json) => setData(json));
  }, []);

  return (
      <div 
      style={{backgroundColor: 'rgba(155, 155, 155, 0.5)',
      height:'100%',
      padding:"20px"
      }}>
        {data.map((response, team_key) => (
        <Card 
        key={team_key}
        teamName={response.team_name}
        teamBadge={response.team_badge}
        players={response.players}
        coaches={response.coaches}
        />
        ))}
      </div>
        )
}

export default App

{/* <p >{response.team_name}</p> */}
