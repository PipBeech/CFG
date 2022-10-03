function signMeUp() {
    let email = prompt("Enter your email address to join our mailing list!", "Enter your email address...")
    let text;
        if (email == null || email == "") {
            text = "Ok, you can join the list later in Settings."
        }
        else {
            text = "We have sent a verification email to " + email;
        }
}