import events from "events";

class FitnessTracker extends events.EventEmitter {
  constructor() {
    super();
    this.progress = 0;
    this.goal = 1000;
  }

  addExercise(exercise) {
    this.progress += exercise.caloriesBurned;
    if (this.progress >= this.goal) {
      this.emit("goalReached", this.progress);
    }
    // Write code to update the progress and emit a 'goalReached' event when the goal is reached
  }
}

const tracker = new FitnessTracker();

const Solution = () => {
  // define  listener that sends a congratulatory message to the user upon reaching their fitness goal

  tracker.on("goalReached", (progress) => {
    console.log("Congratultions! You have reached your fitness goals !");
  });

  // simulate adding exercise
  tracker.addExercise({ name: "Running", caloriesBurned: 500 });
  tracker.addExercise({ name: "Weightlifting", caloriesBurned: 600 });
};

Solution();

export { FitnessTracker, Solution };
