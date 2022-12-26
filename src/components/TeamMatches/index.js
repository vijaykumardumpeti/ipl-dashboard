import {Component} from 'react'

import './index.css'

export default class TeamMatches extends Component {
  componentDidMount() {
    this.getTeamMatchesData()
  }

  getTeamMatchesData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const backendData = await response.json()
    console.log(backendData)

    const frontEndData = {
      latestMatchDetails: backendData.latest_match_details,
      competingTeam: backendData.latest_match_details.competing_team,
    }
    console.log(frontEndData)
  }

  render() {
    return (
      <div className="Team-matches-container">
        <h1>teammatches</h1>
      </div>
    )
  }
}
