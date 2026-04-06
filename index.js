// Function to create a login tracker for a user
function createLoginTracker(userInfo) {
  // Initialize attempt count
  let attemptCount = 0;

  // Nested arrow function to handle login attempts
  return (passwordAttempt) => {
    // Increment the attempt count
    attemptCount++;

    // Check if the user has exceeded 3 attempts
    if (attemptCount > 3) {
      return "Account locked due to too many failed login attempts";
    }

    // Check if the password matches
    if (passwordAttempt === userInfo.password) {
      return "Login successful";
    } else {
      return `Attempt ${attemptCount}: Login failed`;
    }
  };
}

// Example usage
const user = { username: "manase", password: "secure123" };
const login = createLoginTracker(user);

console.log(login("wrongpass")); // Attempt 1: Login failed
console.log(login("wrongpass")); // Attempt 2: Login failed
console.log(login("wrongpass")); // Attempt 3: Login failed
console.log(login("secure123")); // Account locked due to too many failed login attempts


module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};