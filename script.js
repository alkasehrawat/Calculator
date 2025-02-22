let advancedVisible = false;

function appendValue(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function calculateResult() {
    try {
        let expression = document.getElementById("display").value;
        expression = expression.replace(/Math.sqrt\(/g, "Math.sqrt(");
        expression = expression.replace(/Math.log10\(/g, "Math.log10(");
        expression = expression.replace(/Math.log\(/g, "Math.log(");
        expression = expression.replace(/Math.sin\(/g, "Math.sin(");
        expression = expression.replace(/Math.cos\(/g, "Math.cos(");
        expression = expression.replace(/Math.tan\(/g, "Math.tan(");
        expression = expression.replace(/1\//g, "(1/");
        expression = expression.replace(/\^/g, "**");

        document.getElementById("display").value = eval(expression);
    } catch {
        document.getElementById("display").value = "Error";
    }
}

function toggleAdvanced() {
    const advancedSection = document.querySelector(".advanced");
    advancedVisible = !advancedVisible;
    advancedSection.style.display = advancedVisible ? "grid" : "none";

    // Expand Width When Advanced is Open
    document.querySelector(".calculator").style.width = advancedVisible ? "550px" : "450px";
}

function factorial(n) {
    return n <= 1 ? 1 : n * factorial(n - 1);
}
