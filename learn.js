function calculate() {

    let total = parseInt(document.getElementById("total").value);
    let attended = parseInt(document.getElementById("attended").value);
    let target = parseInt(document.getElementById("target").value);

    if (
        isNaN(total) ||
        isNaN(attended) ||
        total <= 0 ||
        attended < 0 ||
        attended > total
    ) {
        alert("Please enter valid values!");
        return;
    }

    let percentage = ((attended / total) * 100).toFixed(2);

    document.getElementById("percentage").innerHTML =
        percentage + "%";

    let degree = (percentage / 100) * 360;

    document.querySelector(".circle").style.background =
        `conic-gradient(#00e676 ${degree}deg, #ddd ${degree}deg)`;

    document.getElementById("current").innerHTML =
        `📊 Current Attendance: <b>${percentage}%</b>`;

    if (percentage < target) {

        let need = Math.ceil(
            ((target * total) - (100 * attended)) /
            (100 - target)
        );

        document.getElementById("need").innerHTML =
            `✅ You need to attend <b>${need}</b> more classes to reach <b>${target}%</b>.`;

        document.getElementById("bunk").innerHTML = "";

    } else {

        let bunk = Math.floor(
            ((attended * 100) - (target * total)) /
            target
        );

        document.getElementById("need").innerHTML =
            `🎯 Target Attendance (${target}%) Achieved`;

        document.getElementById("bunk").innerHTML =
            `😎 You can bunk <b>${bunk}</b> more classes and still stay above <b>${target}%</b>.`;
    }
}