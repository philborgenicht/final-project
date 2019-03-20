
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('teams').del()
    .then(function () {
      // Inserts seed entries
      return knex('teams').insert([
        {id: 1, name: 'Los Angeles Lakers', city:'Los Angeles', state:'California', sportName:'Basketball', sportId:1, onList:false},
        {id: 2, name: 'Denver Broncos', city:'Denver', state:'Colorado', sportName:'Football' , sportId:2, onList:false},
        {id: 3, name: 'Colorado Rockies', city:'Denver', state:'Colorado', sportName:'Baseball' , sportId:3, onList:false},
        {id: 4, name: 'New York Rangers', city:'New York City', state:'New York', sportName:'Hockey' , sportId:4, onList:false},

                {id: 5, name: 'Boston Celtics', city:'Boston', state:'Massachusetts', sportName:'Basketball' , sportId:1, onList:false},
                {id: 6, name: 'Miami Heat', city:'Miami', state:'Floride', sportName:'Basketball' , sportId:1, onList:false},
                {id: 7, name: 'Denver Nuggets', city:'Denver', state:'Colorado', sportName:'Basketball' , sportId:1, onList:false},
                {id: 8, name: 'Chicago Bulls', city:'Chicago', state:'Illinois', sportName:'Basketball' , sportId:1, onList:false},
                {id: 9, name: 'Minnesota Timberwolves', city:'Minneapolis', state:'Minnesota', sportName:'Basketball' , sportId:1, onList:false},
                {id: 10, name: 'Golden State Warriors', city:'Oakland', state:'California', sportName:'Basketball' , sportId:1, onList:false},
                {id: 11, name: 'Houston Rockets', city:'Houston', state:'Texas', sportName:'Basketball' , sportId:1, onList:false},
                {id: 12, name: 'Philadelphia 76ers', city:'Philadelphia', state:'Pennsylvania', sportName:'Basketball' , sportId:1, onList:false},
                {id: 13, name: 'Milwaukee Bucks', city:'Milwaukee', state:'Wisconsin', sportName:'Basketball' , sportId:1, onList:false},
                {id: 14, name: 'New York Knicks', city:'New York City', state:'New York', sportName:'Basketball' , sportId:1, onList:false},
                {id: 15, name: 'Oklahoma City Thunder', city:'Oklahoma City', state:'Oklahoma', sportName:'Basketball' , sportId:1, onList:false},
                {id: 16, name: 'San Antonio Spurs', city:'San Antonio', state:'Texas', sportName:'Basketball' , sportId:1, onList:false},
                {id: 17, name: 'New Orleans Pelicans', city:'New Orleans', state:'Louisiana', sportName:'Basketball' , sportId:1, onList:false},
                {id: 18, name: 'Atlanta Hawks', city:'Atlanta', state:'Georgia', sportName:'Basketball' , sportId:1, onList:false},
                {id: 19, name: 'Utah Jazz', city:'Salt Lake City', state:'Utah', sportName:'Basketball' , sportId:1, onList:false},
                {id: 20, name: 'Indiana Pacers', city:'Indianapolis', state:'Indiana', sportName:'Basketball' , sportId:1, onList:false},
                {id: 21, name: 'Dallas Mavericks', city:'Dallas', state:'Mavericks', sportName:'Basketball' , sportId:1, onList:false},
                {id: 22, name: 'Cleveland Cavaliers', city:'Cleveland', state:'Ohio', sportName:'Basketball' , sportId:1, onList:false},
                {id: 23, name: 'Portland Trailblazers', city:'Portland', state:'Oregon', sportName:'Basketball' , sportId:1, onList:false},
                {id: 24, name: 'Detroit Pistons', city:'Detroit', state:'Michigan', sportName:'Basketball' , sportId:1, onList:false},


                {id: 25, name: 'New York Yankees', city:'New York City', state:'New York', sportName:'Baseball' , sportId:3, onList:false},
                {id: 26, name: 'New York Mets', city:'New York City', state:'New York', sportName:'Baseball' , sportId:3, onList:false},
                {id: 27, name: 'Boston Red Sox', city:'Boston', state:'Massachusetts', sportName:'Baseball' , sportId:3, onList:false},
                {id: 28, name: 'Philadelphia Phillies', city:'Philadelphia', state:'Pennsylvania', sportName:'Baseball' , sportId:3, onList:false},
                {id: 29, name: 'Saint Louis Cardinals', city:'Saint Louis', state:'Missouri', sportName:'Baseball' , sportId:3, onList:false},
                {id: 30, name: 'Houston Astros', city:'Houston', state:'Texax', sportName:'Baseball' , sportId:3, onList:false},
                {id: 31, name: 'Chicago Cubs', city:'Chicago', state:'Illinois', sportName:'Baseball' , sportId:3, onList:false},
                {id: 32, name: 'San Francisco Giants', city:'San Francisco', state:'California', sportName:'Baseball' , sportId:3, onList:false},
                {id: 33, name: 'Los Angeles Dodgers', city:'Los Angeles', state:'California', sportName:'Baseball' , sportId:3, onList:false},
                {id: 34, name: 'Seattle Mariners', city:'Seattle', state:'Washington', sportName:'Baseball' , sportId:3, onList:false},
                {id: 35, name: 'Los Angeles Angels', city:'California', state:'California', sportName:'Baseball' , sportId:3, onList:false},


                {id: 36, name: 'New England Patriots', city:'Foxborough', state:'Massachusetts', sportName:'Football' , sportId:2, onList:false},
                {id: 37, name: 'New York Giants', city:'East Rutherford', state:'New Jersey', sportName:'Football' , sportId:2, onList:false},
                {id: 38, name: 'Green Bay Packers', city:'Green Bay', state:'Wisconsin', sportName:'Football' , sportId:2, onList:false},
                {id: 39, name: 'Seattle Seahawks', city:'Seattle', state:'Washington', sportName:'Football' , sportId:2, onList:false},
                {id: 40, name: 'Oakland Raiders', city:'Oakland', state:'California', sportName:'Football' , sportId:2, onList:false},
                {id: 41, name: 'San Francisco 49ers', city:'San Francisco', state:'California', sportName:'Football' , sportId:2, onList:false},
                {id: 42, name: 'New Orleans Saints', city:'New Orleans', state:'Louisiana', sportName:'Football' , sportId:2, onList:false},
                {id: 43, name: 'Houston Texans', city:'Houston', state:'Texas', sportName:'Football' , sportId:2, onList:false},
                {id: 44, name: 'Dallas Cowboys', city:'Dallas', state:'Texas', sportName:'Football' , sportId:2, onList:false},
                {id: 45, name: 'Los Angeles Rams', city:'Los Angeles', state:'California', sportName:'Football' , sportId:2, onList:false},
                {id: 46, name: 'Minnesota Vikings', city:'Minneapolis', state:'Minnesota', sportName:'Football' , sportId:2, onList:false},
                {id: 47, name: 'Cleveland Browns', city:'Cleveland', state:'Ohio', sportName:'Football' , sportId:2, onList:false},
                {id: 48, name: 'Philadelphia Eagles', city:'Philadelphia', state:'Pennsylvania', sportName:'Football' , sportId:2, onList:false},
                {id: 49, name: 'Pittsburgh Steelers', city:'Pittsburgh', state:'Pennsylvania', sportName:'Football' , sportId:2, onList:false},
                {id: 50, name: 'Chicago Bears', city:'Chicago', state:'Illinois', sportName:'Football' , sportId:2, onList:false},
                {id: 51, name: 'Kansas City Chiefs', city:'Kansas City', state:'Missouri', sportName:'Football' , sportId:2, onList:false},
                {id: 52, name: 'Miami Dolphins', city:'Miami', state:'Florida', sportName:'Football' , sportId:2, onList:false},
                {id: 53, name: 'Baltimore Ravens', city:'Baltimore', state:'Maryland', sportName:'Football' , sportId:2, onList:false},

                {id: 54, name: 'New York Islanders', city:'New York City', state:'New York', sportName:'Hockey' , sportId:4, onList:false},
                {id: 55, name: 'Colorado Avalanche', city:'Denver', state:'Colorado', sportName:'Hockey' , sportId:4, onList:false},
                {id: 56, name: 'Los Angeles Kings', city:'Los Angeles', state:'California', sportName:'Hockey' , sportId:4, onList:false},
                {id: 57, name: 'Pittsburgh Penguins', city:'Pittsburgh', state:'Pennsylvania', sportName:'Hockey' , sportId:4, onList:false},
                {id: 58, name: 'Chicago Blackhawks', city:'Chicago', state:'Illinois', sportName:'Hockey' , sportId:4, onList:false},
                {id: 59, name: 'Boston Bruins', city:'Boston', state:'Massachusetts', sportName:'Hockey' , sportId:4, onList:false},
                {id: 60, name: 'Tampa Bay Lightning', city:'Tampa Bay', state:'Florida', sportName:'Hockey' , sportId:4, onList:false},
                {id: 61, name: 'Detroid Red Wings', city:'Detroit', state:'Michigan', sportName:'Hockey' , sportId:4, onList:false},
                {id: 62, name: 'San Jose Sharks', city:'San Jose', state:'California', sportName:'Hockey' , sportId:4, onList:false},
                {id: 63, name: 'Saint Louis Blues', city:'Saint Louis', state:'Missouri', sportName:'Hockey' , sportId:4, onList:false},
                {id: 64, name: 'New Jersey Devils', city:'Newark', state:'New Jersey', sportName:'Hockey' , sportId:4, onList:false},
                {id: 65, name: 'Nashville Predators', city:'Nashville', state:'Tennessee', sportName:'Hockey' , sportId:4, onList:false},
                {id: 66, name: 'Anaheim Ducks', city:'Anaheim', state:'California', sportName:'Hockey' , sportId:4, onList:false},
                {id: 67, name: 'Dallas Stars', city:'Dallas', state:'Texas', sportName:'Hockey' , sportId:4, onList:false},
                                {id: 68, name: 'Los Angeles Clippers', city:'Los Angeles', state:'California', sportName:'Basketball' , sportId:1, onList:false}

      ])
      .then(() => {
        return knex.raw("SELECT setval('teams_id_seq', (SELECT MAX(id) FROM teams))")
      })
    })
}
