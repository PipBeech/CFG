let careersApplyNow = () => {
  let jobPrompt = prompt("Do you want to Apply for this job?");
  let job = jobPrompt.toLowerCase();
  let message;
  if (job === "yes") {
    let name = prompt("What is your name?");
    let email = prompt("What is your email address?");
    message =
      "Thank you " + name + " we shall send an email to " + email + " shortly.";
  } else if (job === "no") {
    message = "Okay fine, no job for you!";
  } else {
    message = "Please type yes or no.";
  }
  return alert(message);
};
 