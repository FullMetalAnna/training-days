# Project Training Days
Working on poorly scoped variables that might cause en errors.

**Project description**;

As a seasoned athlete, one of your favorite activities is running marathons. You use a service called Training Days that sends you a message for the event you signed up for and the days you have left to train.

Since you also code, Training Days has asked you to help them solve a problem: The program currently uses the wrong scope for its variables. They know this can be troublesome as their service evolves. In this project you will make Training Days more maintainable and less error-prone by fixing variable scopes.

The errors are resolved and in comments there is process of making the change.

This project is inspiration from [CodeAcademy](https://www.codecademy.com/), and will be updated and edited in the future

![This is an image](https://static1.thegamerimages.com/wordpress/wp-content/uploads/2020/06/Codecademy-logo.jpg?q=50&fit=contain&w=750&h=375&dpr=1.5)


# Project struckture with errors

<p align="center"><img src="https://i.imgur.com/0EKGaiR.png"/></p>

---

<details><summary>View raw code</summary>
<p>

```

// The scope of `random` is too loose 
const random = Math.floor(Math.random() * 3);

const getRandEvent = () => {
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

  if (event === 'Marathon') {
    let days = 50;
  } else if (event === 'Triathlon') {
    let days = 100;
  } else if (event === 'Pentathlon') {
    let days = 200;
  }

  return days;
};

// The scope of `name` is too tight 
const logEvent = event => {
  const name = 'Nala';
  console.log(`${name}'s event is: ${event}`);
};

const logTime = days => {
  const name = 'Nala';
  console.log(`${name}'s time to train is: ${days} days`);
};

const event = getRandEvent();
const days = getTrainingDays(event);
// Define a `name` variable. Use it as an argument after updating logEvent and logTime 


logEvent(event);
logTime(days);
  

```

</p></details>

---


