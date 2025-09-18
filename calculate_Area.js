let length;
let withth;

function calculateArea(length, width) {
    length = document.getElementById("length").value;
    width = document.getElementById("width").value;
    length = parseFloat(length);
    width = parseFloat(width);
    if (isNaN(length) || isNaN(width) || length <= 0 || width <= 0) {
        alert("Please enter valid positive numbers for length and width.");
        return;
    }

    let area = length * width;
    document.getElementById("result").innerText = "The area of the rectangle is: " + area;
    return area;
}