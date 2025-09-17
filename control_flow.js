let userRole = "admin";
let accessLevel;


if (userRole === "admin") {
    accessLevel = "Full access granted";
} else if (userRole === "manager") {
    accessLevel = "Limited access granted";
} else {
    accessLevel = "No access granted";
}

console.log("User Access Level",accessLevel); // Output: "Full access granted"

//===============================================

let isLoggedIn = true;
let userMessage;

if (isLoggedIn) {
    if (userRole === "admin") {
        userMessage = "Welcome, Admin!";
    } else {
        userMessage = "Welcome, User!";
    }
} else {
    userMessage = "Please log in to access the system.";
}
console.log("User Message:",userMessage); // Output: "Welcome, Admin!"

//===============================================


let userType = "subscriber";
let userCategory;

switch (userType) {
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Unknown";
}


console.log("User Category:",userCategory); // Output: "Subscriber" 


//===============================================

let isAuthenticated = true;
let authenticationStatus = isAuthenticated ? "Authenticated" : "Not authenticated";

console.log("Authentication Status:",authenticationStatus); // Output: "Authenticated"

//===============================================

let person = "Subscriber";

switch (person) {
    case "Employee":
        console.log("You are authorized to have access to \"Dietary Services\"");
    case "Enrolled Member":
        console.log("You are authorized to have access to \"Dietary Services\" and one-on-one interaction with a dietician");
    case "Subscriber":
        console.log("You are authorized to have partial access to \"Dietary Services\"");
        break; 
    default:
        console.log("need to enroll or at least subscribe first to avail this facility.");
}

// Output:
// You are authorized to have partial access to "Dietary Services"