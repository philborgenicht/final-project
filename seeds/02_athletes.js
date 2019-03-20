
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('athletes').del()
    .then(function () {
      // Inserts seed entries
      return knex('athletes').insert([
        {id: 1, name:'Lebron James', sport:'Basketball', sportId:1, teamId:1, teamName:'Los Angeles Lakers', position:'Forward', onTeam:false},
        {id: 2, name:'Von Miller', sport:'Football', sportId:2, teamId:2, teamName:'Denver Broncos', position:'Linebacker', onTeam:false},
        {id: 3, name:'Nolan Arenado', sport:'Baseball', sportId:3, teamId:3, teamName:'Colorado Rockies', position:'Third Baseman', onTeam:false},
        {id: 4, name:'Henrik Lundqvist', sport:'Hockey', sportId:4, teamId:4, teamName:'New York Rangers', position:'Goaltender', onTeam:false},

        {id: 5, name:'Lonzo Ball', sport:'Basketball', sportId:1, teamId:1, teamName:'Los Angeles Lakers', position:'Guard', onTeam:false},
        {id: 6, name:'Rajon Rondo', sport:'Basketball', sportId:1, teamId:1, teamName:'Los Angeles Lakers', position:'Guard', onTeam:false},
        {id: 7, name:'Brandon Ingram', sport:'Basketball', sportId:1, teamId:1, teamName:'Los Angeles Lakers', position:'Forward', onTeam:false},
        {id: 8, name:'Tyson Chandler', sport:'Basketball', sportId:1, teamId:1, teamName:'Los Angeles Lakers', position:'Center', onTeam:false},
        {id: 9, name:'Kyle Kuzma', sport:'Basketball', sportId:1, teamId:1, teamName:'Los Angeles Lakers', position:'Forward', onTeam:false},

        {id: 10, name:'Luka Doncic', sport:'Basketball', sportId:1, teamId:21, teamName:'Dallas Mavericks', position:'Guard', onTeam:false},
        {id: 11, name:'Dirk Nowitzki', sport:'Basketball', sportId:1, teamId:21, teamName:'Dallas Mavericks', position:'Forward', onTeam:false},
        {id: 12, name:'Kristaps Porzingis', sport:'Basketball', sportId:1, teamId:21, teamName:'Dallas Mavericks', position:'Forward', onTeam:false},

        {id: 13, name:'Kyrie Irving', sport:'Basketball', sportId:1, teamId:5, teamName:'Boston Celtics', position:'Guard', onTeam:false},
        {id: 14, name:'Gordon Hayward', sport:'Basketball', sportId:1, teamId:5, teamName:'Boston Celtics', position:'Forward', onTeam:false},
        {id: 15, name:'Jayson Tatum', sport:'Basketball', sportId:1, teamId:5, teamName:'Boston Celtics', position:'Forward', onTeam:false},
        {id: 16, name:'Al Horford', sport:'Basketball', sportId:1, teamId:5, teamName:'Boston Celtics', position:'Forward', onTeam:false},
        {id: 17, name:'Terry Rozier', sport:'Basketball', sportId:1, teamId:5, teamName:'Boston Celtics', position:'Guard', onTeam:false},

        {id: 18, name:'Anthony Davis', sport:'Basketball', sportId:1, teamId:17, teamName:'New Orleans Pelicans', position:'Center', onTeam:false},
        {id: 19, name:'Victor Oladipo', sport:'Basketball', sportId:1, teamId:20, teamName:'Indiana Pacers', position:'Guard', onTeam:false},
        {id: 21, name:'Donovan Mitchell', sport:'Basketball', sportId:1, teamId:19, teamName:'Utah Jazz', position:'Guard', onTeam:false},
        {id: 22, name:'James Harden', sport:'Basketball', sportId:1, teamId:11, teamName:'Houston Rockets', position:'Guard', onTeam:false},
        {id: 23, name:'Chris Paul', sport:'Basketball', sportId:1, teamId:11, teamName:'Houston Rockets', position:'Guard', onTeam:false},
        {id: 24, name:'Giannia Antetokounmpo', sport:'Basketball', sportId:1, teamId:13, teamName:'Milwaukee Bucks', position:'Forward', onTeam:false},

        {id: 25, name:'Stephen Curry', sport:'Basketball', sportId:1, teamId:10, teamName:'Golden State Warriors', position:'Guard', onTeam:false},
        {id: 26, name:'Kevin Durant', sport:'Basketball', sportId:1, teamId:10, teamName:'Golden State Warriors', position:'Forward', onTeam:false},
        {id: 27, name:'DeMarcus Cousins', sport:'Basketball', sportId:1, teamId:10, teamName:'Golden State Warriors', position:'Forward', onTeam:false},
        {id: 28, name:'Klay Thompson', sport:'Basketball', sportId:1, teamId:10, teamName:'Golden State Warriors', position:'Forward', onTeam:false},
        {id: 29, name:'Draymond Green', sport:'Basketball', sportId:1, teamId:10, teamName:'Golden State Warriors', position:'Forward', onTeam:false},
        {id: 30, name:'Andre Iguodala', sport:'Basketball', sportId:1, teamId:10, teamName:'Golden State Warriors', position:'Forward', onTeam:false},

        {id: 31, name:'Russell Westbrook', sport:'Basketball', sportId:1, teamId:15, teamName:'Oklahoma City Thunder', position:'Guard', onTeam:false},
        {id: 32, name:'Paul George', sport:'Basketball', sportId:1, teamId:15, teamName:'Oklahoma City Thunder', position:'Forward', onTeam:false},
        {id: 33, name:'Steven Adams', sport:'Basketball', sportId:1, teamId:15, teamName:'Oklahoma City Thunder', position:'Center', onTeam:false},

        {id: 34, name:'DeMar DeRozan', sport:'Basketball', sportId:1, teamId:16, teamName:'San Antonio Spurs', position:'Forward', onTeam:false},
        {id: 35, name:'LaMarcus Aldridge', sport:'Basketball', sportId:1, teamId:16, teamName:'San Antonio Spurs', position:'Forward', onTeam:false},

        {id: 36, name:'Karl-Anthony Towns', sport:'Basketball', sportId:1, teamId:9, teamName:'Minnesota Timberwolves', position:'Center', onTeam:false},
        {id: 37, name:'Derrick Rose', sport:'Basketball', sportId:1, teamId:9, teamName:'Minnesota Timberwolves', position:'Guard', onTeam:false},
        {id: 38, name:'Andrew Wiggins', sport:'Basketball', sportId:1, teamId:9, teamName:'Minnesota Timberwolves', position:'Forward', onTeam:false},
        {id: 39, name:'Luol Deng', sport:'Basketball', sportId:1, teamId:9, teamName:'Minnesota Timberwolves', position:'Forward', onTeam:false},
        {id: 40, name:'Taj Gibson', sport:'Basketball', sportId:1, teamId:9, teamName:'Minnesota Timberwolves', position:'Forward', onTeam:false},

        {id: 41, name:'Dwyane Wade', sport:'Basketball', sportId:1, teamId:6, teamName:'Miami Heat', position:'Guard', onTeam:false},
        {id: 42, name:'Dion Waiters', sport:'Basketball', sportId:1, teamId:6, teamName:'Miami Heat', position:'Forward', onTeam:false},

        {id: 43, name:'Kevin Love', sport:'Basketball', sportId:1, teamId:22, teamName:'Cleveland Cavaliers', position:'', onTeam:false},
        {id: 44, name:'J.R. Smith', sport:'Basketball', sportId:1, teamId:22, teamName:'Cleveland Cavaliers', position:'', onTeam:false},
        {id: 45, name:'Collin Sexton', sport:'Basketball', sportId:1, teamId:22, teamName:'Cleveland Cavaliers', position:'', onTeam:false},
        {id: 46, name:'Tristan Thompson', sport:'Basketball', sportId:1, teamId:22, teamName:'Cleveland Cavaliers', position:'', onTeam:false},

        {id: 47, name:'Blake Griffin', sport:'Basketball', sportId:1, teamId:24, teamName:'Detroit Pistons', position:'Forward', onTeam:false},
        {id: 48, name:'Reggie Jackson', sport:'Basketball', sportId:1, teamId:24, teamName:'Detroit Pistons', position:'Guard', onTeam:false},

        {id: 49, name:'Zach LaVine', sport:'Basketball', sportId:1, teamId:8, teamName:'Chicago Bulls', position:'Guard', onTeam:false},
        {id: 50, name:'Robin Lopez', sport:'Basketball', sportId:1, teamId:8, teamName:'Chicago Bulls', position:'Center', onTeam:false},

        {id: 51, name:'DeAndre Jordan', sport:'Basketball', sportId:1, teamId:14, teamName:'New York Knicks', position:'Center', onTeam:false},
        {id: 52, name:'Kevin Knox', sport:'Basketball', sportId:1, teamId:14, teamName:'New York Knicks', position:'Forward', onTeam:false},

        {id: 53, name:'Lou Williams', sport:'Basketball', sportId:1, teamId:68, teamName:'Los Angeles Clippers', position:'Guard', onTeam:false},


        {id: 54, name:'Joel Embiid', sport:'Basketball', sportId:1, teamId:12, teamName:'Philadelphia 76ers', position:'Forward', onTeam:false},
        {id: 55, name:'Ben Simmons', sport:'Basketball', sportId:1, teamId:12, teamName:'Philadelphia 76ers', position:'Guard', onTeam:false},
        {id: 56, name:'Jimmy Butler', sport:'Basketball', sportId:1, teamId:12, teamName:'Philadelphia 76ers', position:'Forward', onTeam:false},

        {id: 57, name:'Tom Brady', sport:'Football', sportId:2, teamId:36, teamName:'New England Patriots', position:'Quarterback', onTeam:false},
        {id: 58, name:'Rob Gronkowski', sport:'Football', sportId:2, teamId:36, teamName:'New England Patriots', position:'Tight End', onTeam:false},
        {id: 59, name:'Eli Manning', sport:'Football', sportId:2, teamId:37, teamName:'New York Giants', position:'Quarterback', onTeam:false},
        {id: 60, name:'Saquon Barkley', sport:'Football', sportId:2, teamId:37, teamName:'New York Giants', position:'Running Back', onTeam:false},
        {id: 61, name:'Aaron Rodgers', sport:'Football', sportId:2, teamId:38, teamName:'Green Bay Packers', position:'Quarterback', onTeam:false},
        {id: 62, name:'Randall Cobb', sport:'Football', sportId:2, teamId:38, teamName:'Green Bay Packers', position:'Wide Receiver', onTeam:false},
        {id: 63, name:'Russell Wilson', sport:'Football', sportId:2, teamId:39, teamName:'Seattle Seahawks', position:'Quarterback', onTeam:false},
        {id: 64, name:'Shaquem Griffin', sport:'Football', sportId:2, teamId:39, teamName:'Seattle Seahawks', position:'Linebacker', onTeam:false},
        {id: 65, name:'Jimmy Garoppolo', sport:'Football', sportId:2, teamId:41, teamName:'San Francisco 49ers', position:'Quarterback', onTeam:false},
        {id: 66, name:'Richard Sherman', sport:'Football', sportId:2, teamId:41, teamName:'San Francisco 49ers', position:'Cornerback', onTeam:false},
        {id: 67, name:'Marshawn Lynch', sport:'Football', sportId:2, teamId:40, teamName:'Oakland Raiders', position:'Running Back', onTeam:false},

        {id: 68, name:'Brendan Lemieux', sport:'Hockey', sportId:4, teamId:4, teamName:'New York Rangers', position:'Left Wing', onTeam:false},
        {id: 69, name:'Chris Kreider', sport:'Hockey', sportId:4, teamId:4, teamName:'New York Rangers', position:'Left Wing', onTeam:false},
        {id: 70, name:'Mika Zibanejad', sport:'Hockey', sportId:4, teamId:4, teamName:'New York Rangers', position:'Centerman', onTeam:false},
        {id: 71, name:'Tony DeAngelo', sport:'Hockey', sportId:4, teamId:4, teamName:'New York Rangers', position:'Defenseman', onTeam:false},
        {id: 72, name:'Brady Skjei', sport:'Hockey', sportId:4, teamId:4, teamName:'New York Rangers', position:'Defenseman', onTeam:false},
        {id: 73, name:'Marc Staal', sport:'Hockey', sportId:4, teamId:4, teamName:'New York Rangers', position:'Defenseman', onTeam:false},

        {id: 74, name:'Sidney Crosby', sport:'Hockey', sportId:4, teamId:57, teamName:'Pittsburgh Penguins', position:'Centerman', onTeam:false},
        {id: 75, name:'Evgeni Malkin', sport:'Hockey', sportId:4, teamId:57, teamName:'Pittsburgh Penguins', position:'Centerman', onTeam:false},
        {id: 76, name:'Kris Letang', sport:'Hockey', sportId:4, teamId:57, teamName:'Pittsburgh Penguins', position:'Defenseman', onTeam:false},
        {id: 77, name:'Phil Kessel', sport:'Hockey', sportId:4, teamId:57, teamName:'Pittsburgh Penguins', position:'Right Wing', onTeam:false},

        {id: 78, name:'Patrick Kane', sport:'Hockey', sportId:4, teamId:58, teamName:'Chicago Blackhawks', position:'Right Wing', onTeam:false},
        {id: 79, name:'Corey Crawford', sport:'Hockey', sportId:4, teamId:58, teamName:'Chicago Blackhawks', position:'Goaltender', onTeam:false},
        {id: 80, name:'Jonathan Toews', sport:'Hockey', sportId:4, teamId:58, teamName:'Chicago Blackhawks', position:'Centerman', onTeam:false},
        {id: 81, name:'Dylan Strome', sport:'Hockey', sportId:4, teamId:58, teamName:'Chicago Blackhawks', position:'Centerman', onTeam:false},

        {id: 82, name:'Nathan MacKinnon', sport:'Hockey', sportId:4, teamId:55, teamName:'Colorado Avalanche', position:'Centerman', onTeam:false},
        {id: 83, name:'Gabriel Landeskog', sport:'Hockey', sportId:4, teamId:55, teamName:'Colorado Avalanche', position:'Left Wing', onTeam:false},
        {id: 84, name:'Erik Johnson', sport:'Hockey', sportId:4, teamId:55, teamName:'Colorado Avalanche', position:'Defenseman', onTeam:false},

        {id: 85, name:'Brad Marchand', sport:'Hockey', sportId:4, teamId:58, teamName:'Boston Bruins', position:'Left Wing', onTeam:false},
        {id: 86, name:'Patrice Bergeron', sport:'Hockey', sportId:4, teamId:59, teamName:'Boston Bruins', position:'Centerman', onTeam:false},
        {id: 87, name:'Charlie Coyle', sport:'Hockey', sportId:4, teamId:59, teamName:'Boston Bruins', position:'Centerman', onTeam:false},
        {id: 88, name:'Charlie McAvoy', sport:'Hockey', sportId:4, teamId:59, teamName:'Boston Bruins', position:'Defenseman', onTeam:false},

        {id: 89, name:'Aaron Judge', sport:'Baseball', sportId:2, teamId:25, teamName:'New York Yankees', position:'Right Field', onTeam:false},
        {id: 90, name:'Giancarlo Stanton', sport:'Baseball', sportId:2, teamId:25, teamName:'New York Yankees', position:'Right Field', onTeam:false},
        {id: 91, name:'C.C. Sabathia', sport:'Baseball', sportId:2, teamId:25, teamName:'New York Yankees', position:'Pitcher', onTeam:false},
        {id: 92, name:'Brett Gardner', sport:'Baseball', sportId:2, teamId:25, teamName:'New York Yankees', position:'Left Field', onTeam:false},
        {id: 93, name:'Aaron Hicks', sport:'Baseball', sportId:2, teamId:25, teamName:'New York Yankees', position:'Center Field', onTeam:false},
        {id: 94, name:'Luis Severino', sport:'Baseball', sportId:2, teamId:25, teamName:'New York Yankees', position:'Pitcher', onTeam:false},
        {id: 95, name:'Didi Gregorius', sport:'Baseball', sportId:2, teamId:25, teamName:'New York Yankees', position:'Shortstop', onTeam:false},
        {id: 96, name:'Aroldis Chapman', sport:'Baseball', sportId:2, teamId:25, teamName:'New York Yankees', position:'Pitcher', onTeam:false},
        {id: 97, name:'Greg Bird', sport:'Baseball', sportId:2, teamId:25, teamName:'New York Yankees', position:'First Base', onTeam:false},
        {id: 98, name:'Jacoby Ellsbury', sport:'Baseball', sportId:2, teamId:25, teamName:'New York Yankees', position:'Center Field', onTeam:false},
        {id: 99, name:'Gary Sanchez', sport:'Baseball', sportId:2, teamId:25, teamName:'New York Yankees', position:'Catcher', onTeam:false},
        {id: 100, name:'Troy Tulowitzki', sport:'Baseball', sportId:2, teamId:25, teamName:'New York Yankees', position:'Shortstop', onTeam:false},

                {id: 101, name:'Drew Brees', sport:'Football', sportId:2, teamId:42, teamName:'New Orleans Saints', position:'Quarterback', onTeam:false},
                {id: 102, name:'Teddy Bridgewater', sport:'Football', sportId:2, teamId:42, teamName:'New Orleans Saints', position:'Quarterback', onTeam:false},
                {id: 103, name:'Jadeveon Clowney', sport:'Football', sportId:2, teamId:43, teamName:'Houston Texans', position:'Defensive End', onTeam:false},
                {id: 104, name:'J.J. Watt', sport:'Football', sportId:2, teamId:43, teamName:'Houston Texans', position:'Defensive End', onTeam:false},
                {id: 105, name:'Dak Prescott', sport:'Football', sportId:2, teamId:44, teamName:'Dallas Cowboys', position:'Quarterback', onTeam:false},
                {id: 106, name:'Ezekiel Elliott', sport:'Football', sportId:2, teamId:44, teamName:'Dallas Cowboys', position:'Running Back', onTeam:false},
                {id: 107, name:'Todd Gurley', sport:'Football', sportId:2, teamId:45, teamName:'Los Angeles Rams', position:'Running Back', onTeam:false},
                {id: 108, name:'Kirk Cousins', sport:'Football', sportId:2, teamId:46, teamName:'Minnesota Vikings', position:'Quarterback', onTeam:false},
                {id: 109, name:'Kareem Hunt', sport:'Football', sportId:2, teamId:47, teamName:'Cleveland Browns', position:'Running Back', onTeam:false},
                {id: 110, name:'Michael Bennett', sport:'Football', sportId:2, teamId:48, teamName:'Philadelphia Eagles', position:'Defensive End', onTeam:false},
                {id: 111, name:'Ben Roethlisberger', sport:'Football', sportId:2, teamId:49, teamName:'Pittsburgh Steelers', position:'Quarterback', onTeam:false},
                {id: 112, name:'Khalil Mack', sport:'Football', sportId:2, teamId:50, teamName:'Chicago Bears', position:'Linebacker', onTeam:false},
                {id: 113, name:'Tyreek Hill', sport:'Football', sportId:2, teamId:51, teamName:'Kansas City Chiefs', position:'Wide Receiver', onTeam:false},
                {id: 114, name:'Frank Gore', sport:'Football', sportId:2, teamId:52, teamName:'Miami Dolphins', position:'Running Back', onTeam:false},
                {id: 115, name:'Joe Flacco', sport:'Football', sportId:2, teamId:53, teamName:'Baltimore Ravens', position:'Quarterback', onTeam:false},
                {id: 116, name:'Lamar Jackson', sport:'Football', sportId:2, teamId:53, teamName:'Baltimore Ravens', position:'Quarterback', onTeam:false},
                {id: 117, name:'Terrell Suggs', sport:'Football', sportId:2, teamId:53, teamName:'Baltimore Ravens', position:'Linebacker', onTeam:false},

                {id: 118, name:'Jacob DeGrom', sport:'Baseball', sportId:3, teamId:26, teamName:'New York Mets', position:'Pitcher', onTeam:false},
                {id: 119, name:'Noah Syndergaard', sport:'Baseball', sportId:3, teamId:26, teamName:'New York Mets', position:'Pitcher', onTeam:false},
                {id: 120, name:'Yoenis Cespedes', sport:'Baseball', sportId:3, teamId:26, teamName:'New York Mets', position:'Left Field', onTeam:false},
                {id: 129, name:'Mookie Betts', sport:'Baseball', sportId:3, teamId:27, teamName:'Boston Red Sox', position:'Right Field', onTeam:false},
                {id: 130, name:'Dustin Pedroia', sport:'Baseball', sportId:3, teamId:27, teamName:'Boston Red Sox', position:'Second Base', onTeam:false},
                {id: 131, name:'David Price', sport:'Baseball', sportId:3, teamId:27, teamName:'Boston Red Sox', position:'Pitcher', onTeam:false},
                {id: 132, name:'Bryce Harper', sport:'Baseball', sportId:3, teamId:28, teamName:'Philadelphia Phillies', position:'Right Field', onTeam:false},
                {id: 133, name:'Andrew McCutchen', sport:'Baseball', sportId:3, teamId:28, teamName:'Philadelphia Phillies', position:'Right Field', onTeam:false},
                {id: 134, name:'Rhys Hoskins', sport:'Baseball', sportId:3, teamId:28, teamName:'Philadelphia Phillies', position:'Left Field', onTeam:false},
                {id: 135, name:'Jordan Hicks', sport:'Baseball', sportId:3, teamId:29, teamName:'Saint Louis Cardinals', position:'Pitcher', onTeam:false},
                {id: 136, name:'Yadier Molina', sport:'Baseball', sportId:3, teamId:29, teamName:'Saint Louis Cardinals', position:'Catcher', onTeam:false},
                {id: 137, name:'Paul Goldschmidt', sport:'Baseball', sportId:3, teamId:29, teamName:'Saint Louis Cardinals', position:'First Base', onTeam:false},
                {id: 138, name:'Yuli Gurriel', sport:'Baseball', sportId:3, teamId:30, teamName:'Houston Astros', position:'First Base', onTeam:false},
                {id: 139, name:'Jose Altuve', sport:'Baseball', sportId:3, teamId:30, teamName:'Houston Astros', position:'Second Base', onTeam:false},
                {id: 140, name:'Justin Verlander', sport:'Baseball', sportId:3, teamId:30, teamName:'Houston Astros', position:'Pitcher', onTeam:false},
                {id: 141, name:'Anthony Rizzo', sport:'Baseball', sportId:3, teamId:31, teamName:'Chicago Cubs', position:'First Base', onTeam:false},
                {id: 142, name:'Yu Darvish', sport:'Baseball', sportId:3, teamId:31, teamName:'Chicago Cubs', position:'Pitcher', onTeam:false},
                {id: 143, name:'Addison Russell', sport:'Baseball', sportId:3, teamId:31, teamName:'Chicago Cubs', position:'Shortstop', onTeam:false},
                {id: 144, name:'Madison Bumgartner', sport:'Baseball', sportId:3, teamId:32, teamName:'San Francisco Giants', position:'Pitcher', onTeam:false},
                {id: 145, name:'Buster Posey', sport:'Baseball', sportId:3, teamId:32, teamName:'San Francisco Giants', position:'Catcher', onTeam:false},
                {id: 146, name:'Pablo Sandoval', sport:'Baseball', sportId:3, teamId:32, teamName:'San Francisco Giants', position:'Third Base', onTeam:false},
                {id: 147, name:'Clayton Kershaw', sport:'Baseball', sportId:3, teamId:33, teamName:'Los Angeles Dodgers', position:'Pitcher', onTeam:false},
                {id: 148, name:'Corey Seager', sport:'Baseball', sportId:3, teamId:33, teamName:'Los Angeles Dodgers', position:'Shortstop', onTeam:false},
                {id: 149, name:'Cody Bellinger', sport:'Baseball', sportId:3, teamId:33, teamName:'Los Angeles Dodgers', position:'First Base', onTeam:false},
                {id: 150, name:'Felix Hernandez', sport:'Baseball', sportId:3, teamId:34, teamName:'Seattle Mariners', position:'Pitcher', onTeam:false},
                {id: 151, name:'Dee Gordon', sport:'Baseball', sportId:3, teamId:34, teamName:'Seattle Mariners', position:'First Base', onTeam:false},
                {id: 152, name:'Edwin Encarnacion', sport:'Baseball', sportId:3, teamId:34, teamName:'Seattle Mariners', position:'Second Base', onTeam:false},
                {id: 153, name:'Mike Trout', sport:'Baseball', sportId:3, teamId:35, teamName:'Los Angeles Angels', position:'Center Field', onTeam:false},
                {id: 154, name:'Albert Pujols', sport:'Baseball', sportId:3, teamId:35, teamName:'Los Angeles Angels', position:'First Base', onTeam:false},
                {id: 155, name:'Matt Harvey', sport:'Baseball', sportId:3, teamId:35, teamName:'Los Angeles Angels', position:'Pitcher', onTeam:false},
                {id: 156, name:'Justin Upton', sport:'Baseball', sportId:3, teamId:35, teamName:'Los Angeles Angels', position:'Left Field', onTeam:false}

      ])
      .then(() => {
        return knex.raw("SELECT setval('athletes_id_seq', (SELECT MAX(id) FROM athletes))")
      })
    })
}
