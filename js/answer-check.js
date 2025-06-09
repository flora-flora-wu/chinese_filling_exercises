document.getElementById("quizForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const answers = {
        q1: "鞠躬盡瘁",
        q2: "疑鄰盜斧",
        q3: "心亂如麻",
        q4: "移花接木",
        q5: "肝膽相照"
    };
    let resultHTML = "<h2>結果：</h2><ul>";
    let form = e.target;
    let allCorrect = true;
    for (let key in answers) {
        let userAns = form[key].value.trim();
        if (userAns === answers[key]) {
            resultHTML += `<li>${userAns} ✅ 正確</li>`;
        } else {
            allCorrect = false;
            resultHTML += `<li>${userAns || "（空白）"} ❌ 錯誤，正確答案是「${answers[key]}」</li>`;
        }
    }
    resultHTML += "</ul>";
    document.getElementById("result").innerHTML = resultHTML;
});
