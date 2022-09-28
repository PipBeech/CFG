window.onload = () => {
  document.getElementsByClassName("applyNowButton").onclick = () => {
    let jobPrompt = prompt("Do you want to Apply for this job?");
    let job = jobPrompt.toLowerCase();
    if (job === "yes") {
      let name = prompt("What is your name?");
      let email = prompt("What is your email address?");
      alert =
        "Thank you " +
        name +
        " we shall send an email to " +
        email +
        "shortly.";
    } else if (job === "no") {
      alert = "Okay fine, no job for you!";
    } else {
      alert = "Please type yes or no.";
    }
  };
};
