// The scope of `random` is too loose 

// in the end of project, as we have two athlets we had to remove  const random = Math.floor(Math.random() * 3); into getRndEvent() function

const getRandEvent = () => {
  const random = Math.floor(Math.random() * 3);

  if (random === 0) {
    return 'Marathon';
  } else if (random === 1) {
    return 'Triathlon';
  } else if (random === 2) {
    return 'Pentathlon';
  }
};

// The scope of `days` is too tight 
const getTrainingDays = event => {
  // first we had days variable outside the function
  let days;
  if (event === 'Marathon') {
    days = 50;
  } else if (event === 'Triathlon') {
    days = 100;
  } else if (event === 'Pentathlon') {
    days = 200;
  }


  return days;
};

// The scope of `name` is too tight 
const name = 'Nala';
// for us to be able to call name and event, we had to add add name as the first parameter for each function and move name to variable to global scope. 
const logEvent = (name, event) => {
  console.log(`${name}'s event is: ${event}`);
};
const logTime = (name, days) => {
  console.log(`${name}'s time to train is: ${days} days`);
};


const event = getRandEvent();
const days = getTrainingDays(event);
// Define a `name` variable. Use it as an argument after updating logEvent and logTime 

logEvent(name, event);
logTime(name, days);


// we added second athlete for us to see the structure of functions and possible errors - in the end of project, as we have two athlets we had to remove  const random = Math.floor(Math.random() * 3); into getRndEvent() function
const event2 = getRandEvent();
const days2 = getTrainingDays(event2);
const name2 = 'Warren';
 

logEvent(name2, event2);
logTime(name2, days2);
