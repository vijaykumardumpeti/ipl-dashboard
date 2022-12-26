import {Component} from 'react'
import LatestMatch from '../LatestMatch'

import './index.css'

export default class TeamMatches extends Component {
  state = {
    data: {},
  }

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
    // latestMatchDetails: ,
    const frontEndData = {
      teamBannerUrl: backendData.team_banner_url,
      latestMatchDetails: {
        competingTeam: backendData.latest_match_details.competing_team,
        competingTeamLogo: backendData.latest_match_details.competing_team_logo,
        date: backendData.latest_match_details.date,
        firstInnings: backendData.latest_match_details.first_innings,
        id: backendData.latest_match_details.id,
        manOfTheMatch: backendData.latest_match_details.man_of_the_match,
        matchStatus: backendData.latest_match_details.match_status,
        result: backendData.latest_match_details.result,
        secondInnings: backendData.latest_match_details.second_innings,
        umpires: backendData.latest_match_details.umpires,
        venue: backendData.latest_match_details.venue,
      },

      recentMatches: backendData.recent_matches.map(eachObject => ({
        competingTeam: eachObject.competing_team,
        competingTeamLogo: eachObject.competing_team_logo,
        date: eachObject.date,
        firstInnings: eachObject.first_innings,
        id: eachObject.id,
        manOfTheMatch: eachObject.man_of_the_match,
        matchStatus: eachObject.match_status,
        result: eachObject.result,
        secondInnings: eachObject.second_innings,
        umpires: eachObject.umpires,
        venue: eachObject.venue,
      })),
    }
    console.log(frontEndData)
    this.setState({
      data: frontEndData,
    })
  }

  render() {
    const {data} = this.state
    const {teamBannerUrl, latestMatchDetails} = data
    console.log(latestMatchDetails)
    return (
      <div className="Team-matches-container">
        <div className="team-banner-url">
          <img alt="team banner" src={teamBannerUrl} />
        </div>
        <h1>Latest Matches</h1>

        <h1>details</h1>
        <LatestMatch latestMatchDetails={latestMatchDetails} />
      </div>
    )
  }
}
