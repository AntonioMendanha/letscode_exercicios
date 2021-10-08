/* numYoungVotes, numYoungPeople: 18-25
 * numMidVotesPeople, numMidsPeople: 26-35
 * numOldVotesPeople, numOldsPeople: 36-55
 */ 
let voters = [ 
  {name:'Bob' , age: 30, voted: true},{name:'Jake' , age: 32, voted: true},{name:'Kate' , age: 25, voted: false}, {name:'Sam' , age: 20, voted: false}, {name:'Phil' , age: 21, voted: true}, {name:'Ed' , age:55, voted:true}, {name:'Tami' , age: 54, voted:true}, {name: 'Mary', age: 31, voted: false}, {name: 'Becky', age: 43, voted: false}, {name: 'Joey', age: 41, voted: true}, {name: 'Jeff', age: 30, voted: true}, {name: 'Zack', age: 19, voted: false} 
];
//Verifica se a idade está dentro do range estabelecido
let rangeAge = (person, initialAge, finalAge) => person.age >= initialAge && person.age <= finalAge;
//Verifica se a voted===true
let isVotedTrue = (person) => person.voted;


let filteredVoters = voters.reduce(
  (acc, person) => {
    if (rangeAge(person, 18, 25)) {
      return {
        ...acc,
        youngVoters: {
          votedCount: isVotedTrue(person)
            ? acc.youngVoters.votedCount + 1
            : acc.youngVoters.votedCount,
        count: acc.youngVoters.count + 1,
        }
      }
    } else if (rangeAge(person, 26, 35)) {
      return {
        ...acc,
        midVoters: {
          votedCount: isVotedTrue(person)
            ? acc.midVoters.votedCount + 1
            : acc.midVoters.votedCount,
          count: acc.midVoters.count + 1,
        }
      }
    } else if (rangeAge(person, 36, 55)) {
        return {
          ...acc,
          olderVoters: {
            votedCount: isVotedTrue(person)
              ? acc.olderVoters.votedCount + 1
              : acc.olderVoters.votedCount,
          count: acc.olderVoters.count + 1,
          }
        }
    }
  },{
    youngVoters: {votedCount: 0, count: 0},
    midVoters: {votedCount: 0, count: 0},
    olderVoters: {votedCount: 0, count: 0},
  }
);
console.log(filteredVoters);