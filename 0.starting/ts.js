var formDOM = document.getElementById("form");
var input1DOM = document.getElementById("input1");
var input2DOM = document.getElementById("input2");
var solutionDOM = document.getElementById("solution");
formDOM.addEventListener("submit", function (e) {
    e.preventDefault();
    var a = parseInt(input1DOM.value);
    var b = parseInt(input2DOM.value);
    var solution = add(a, b);
    console.log(solution);
    solutionDOM.value = String(solution);
});
function add(a, b) {
    return a + b;
}
