import {Component} from 'react'
import './index.css'

export default class LatestMatch extends Component {
  render() {
    const {latestMatchDetails} = this.props

    const {
      competingTeam,
      date,
      venue,
      result,
      competingTeamLogo,
      firstInnings,
      secondInnings,
      manOfTheMatch,
      umpires,
    } = latestMatchDetails

    return (
      <div className="latest-match-card-container">
        <div className="first-container">
          <h1>{competingTeam}</h1>
          <h1>{date}</h1>
          <p>{venue}</p>
          <p>{result}</p>
        </div>

        <div className="second-container">
          <img className="competing-team-logo" alt="" src={competingTeamLogo} />
        </div>

        <div className="third-container">
          <h1>First Innings</h1>
          <p>{firstInnings}</p>
          <h1>Second Innings</h1>
          <p>{secondInnings}</p>

          <h1>Man Of The Match</h1>
          <p>{manOfTheMatch}</p>
          <h1>Umpires</h1>
          <p>{umpires}</p>
        </div>
      </div>
    )
  }
}
