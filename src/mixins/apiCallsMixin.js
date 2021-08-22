import axios from 'axios'
import { baseUrl } from '../vars'

var comingRaces = []
var pastRaces = []
var todaysDate

export default {
  methods: {
    async getRaces(para) {
    /*
      Params:
      allRaces - Returns an array of all the races of the current season.
      latestRace - Returns an object contining the season and the round of the lastest race.
      nextRace - Returns an object contining the next race.
    */
      try {
        const response = await axios.get(`${baseUrl}current.json`)

        this.allRaces = response.data.MRData.RaceTable.Races

        if (para == 'allRaces') {
          return {
            allRaces: this.allRaces,
            dataLoaded: true
          }
        } else {
          todaysDate = this.getTodaysDate()
          this.allRaces.map(race => {
            let raceDate = Date.parse(race.date);
            if (raceDate >= todaysDate) {
              comingRaces.push(race)
            } else {
              pastRaces.push(race)
            }
          });

          if (para == 'latestRace') {
            let lr = pastRaces.slice(-1)[0]
            return {
              season: lr.season,
              round: lr.round
            }
          }
  
          if (para == 'nextRace') {
            return {
              nextRace: comingRaces[0],
              dataLoaded: true
            }
          }
        }
      } catch(e) {
        console.error(e)
      }
    },
    getTodaysDate() {
    /*
      Returns the date of today.
    */
      let dateToday = new Date(new Date().getTime()
      - new Date().getTimezoneOffset() * 60000).toISOString().substr(0, 10);

      return Date.parse(dateToday);
    },
    async getRaceResult(season, lastRound) {
    /*
      Returns the result of a specific race.
    */
      try {
        const response = await axios.get(`${baseUrl}${season}/${lastRound}/results.json`)
        this.race = response.data.MRData.RaceTable.Races[0]

        return {
          lastRaceResult: this.race,
          dataLoaded: true
        }

      } catch(e) {
        console.error(e)
      }
    },
    // async getResultPerTrack(season, track) {
    //   try {
    //     const response = await axios.get(`${baseUrl}${season}/circuits/${track}/results.json`)
    //     this.result = response.data.MRData.RaceTable.Races

    //     let winnerPerSeasonArray = []

    //     if (this.result.length > 1) {
    //       this.result.reverse()
    //     }
    //     for (let i = 0; i < this.result.length; i++) {
    //       winnerPerSeasonArray.push({
    //         season: this.result[i].season,
    //         winner: this.result[i].Results[0].Driver.familyName
    //       })
    //     }
    //     return winnerPerSeasonArray

    //   } catch(e) {
    //     console.error(e)
    //   }
    // },
    async getNextRaceQuali(season, currentRound) {
    /* 
      Returns the qulification result of the next race.
    */
      try {
       //const response = await axios.get(`${baseUrl}${season}/${currentRound}/qualifying.json`)
       const response = await axios.get(`${baseUrl}${season}/11/qualifying.json`)
       let qualiForRace = response.data.MRData.RaceTable.Races
       if (qualiForRace.length != 0) {
         return {
          nextRaceQualification: response.data.MRData.RaceTable.Races[0],
          dataLoaded: true
         }
       }
     } catch(e) {
       console.error(e)
     }     
    },
    async getDriverStandings() {
    /* 
      Returns current the driver standing.
    */
      try {
        const response = await axios.get(`${baseUrl}current/driverStandings.json`)
        this.driverStandings = response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings 

        return {
          standingsDriver: this.driverStandings,
          dataLoaded: true
        }

      } catch(e) {
        console.error(e)
      } 
    },
    async getConstructorStandings() {
    /* 
      Returns current the constructor standing.
    */
      try {
        const response = await axios.get(`${baseUrl}current/constructorStandings.json`)
        this.constructorStandings = response.data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings 

        return {
          standingsConstructor: this.constructorStandings,
          dataLoaded: true
        }

      } catch(e) {
        console.error(e)
      } 
    }
  }
}