document.getElementById('contactForm').addEventListener('submit', function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();
  
    // Grab the values of the form fields
    const fname = document.getElementById('fname').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
  
    // Validate the fields
    if (!fname || !email || !message) {
      document.getElementById('formStatus').innerText = "All fields are required.";
      return;
    }
  
    if (!/\S+@\S+\.\S+/.test(email)) {
      document.getElementById('formStatus').innerText = "Please enter a valid email address.";
      return;
    }
  
    // If validation passes
    document.getElementById('formStatus').innerText = "Thank you! Your message has been submitted.";
  
    // Optionally, clear the form
    this.reset();
  });






