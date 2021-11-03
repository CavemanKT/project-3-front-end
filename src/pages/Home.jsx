import React from 'react'
import { Link } from 'react-router-dom'

const games = [
  {
    id: 'Among us',
    name: 'Among us'
  }, {
    id: 'League of Legend',
    name: 'League of Legend'
  }, {
    id: 'Counter Strike Online',
    name: 'Counter Strike Online'
  }, {
    id: 'Left 4 Dead',
    name: 'Left 4 Dead'
  }, {
    id: 'Minecraft',
    name: 'Minecraft'
  }, {
    id: 'CyberPunk',
    name: 'CyberPunk'
  }, {
    id: 'Call of Duty',
    name: 'Call of Duty'
  }, {
    id: 'Back 4 Blood',
    name: 'Back 4 Blood'
  }, {
    id: 'Grand Theft Auto V',
    name: 'Grand Theft Auto V'
  }, {
    id: 'Roblox',
    name: 'Roblox'
  }, {
    id: 'Fortnite',
    name: 'Fortnite'
  }, {
    id: 'Hacknet',
    name: 'Hacknet'
  }, {
    id: 'Nite team 4',
    name: 'Nite team 4'
  }, {
    id: 'CrossCode',
    name: 'CrossCode'
  }, {
    id: 'Euro Truck Simulator 2 ',
    name: 'Euro Truck Simulator 2 '
  }, {
    id: 'Far Cry 6',
    name: 'Far Cry 6'
  }
]

const PagesHome = () => (
  <div id="pages-home" className="container text-center">
    <div className="row">
      {
        games.map((game, idx) => {
          const key = `${idx}`
          return (
            <Link key={key} className="col-6 col-sm-4 col-md-3" to={`/games/${game.id}`}>{game.name}</Link>
          )
        })
      }
    </div>
  </div>
)

export default PagesHome
