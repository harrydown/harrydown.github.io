
// Constructor notation
var Player = function (firstName, lastName, nbaTeam, fantasyTeam, watchlist, position, preSeasonRank) { // Order of players based on preSeasonRank
  this.firstName = firstName; // first name
  this.lastName = lastName; // last name
  this.nbaTeam = nbaTeam; // nba team
  this.position = position;
  this.fantasyTeam = fantasyTeam; // fantasy team
  this.watchlist = watchlist; // Boolean watchlist
  this.preSeasonRank = preSeasonRank; //preseason rank
  this.playerName = function () {
    this.firstName + " " + this.lastName + " - " + this.nbaTeam + " - " + this.position;
  }
}; // need to add rank based on timePeriod

var kevinDurant = new Player('Kevin', 'Durant', 'Golden State Warriors', 'SF, PF');

// need to push statistics (categories) to players based on timePeriod

var timePeriod {
season: 'Season',
thirtyDay: '30-Day'
}

// categories sit at the top of the categories bar
// Loop function to apply for categories

var categories {
ftm: , // free throws made
fta: , // free throws attempted
ftp: , // free throws percentage
fgm: , // free goals made
fga: , // free goals attempted
fgp: , // free goals percentage
tpm: , // 3 pointers made
pts: , // points
rbd: , // rebounds
ass: , // assists
stl: , // steals
blk: , // blocks
tos:  // turnovers
}
