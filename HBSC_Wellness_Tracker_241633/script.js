function scrollToApp() {
  document.getElementById("app").scrollIntoView({ behavior: "smooth" });
}

function selectMood(mood) {
  const result = document.getElementById("moodResult");

  if (mood.includes("Среќен")) {
    result.innerHTML = "Одлично! Продолжи со позитивните навики денес.";
  } else if (mood.includes("Неутрален")) {
    result.innerHTML = "Во ред е да имаш мирен ден. Обиди се да направиш нешто мало за себе.";
  } else if (mood.includes("Стресен")) {
    result.innerHTML = "Обиди се со кратка пауза, длабоко дишење или прошетка од 10 минути.";
  } else {
    result.innerHTML = "Жал ми е што се чувствуваш така. Разговор со пријател или одмор може да помогне.";
  }
}

function checkHabits() {
  const sleep = Number(document.getElementById("sleep").value);
  const activity = Number(document.getElementById("activity").value);
  const screen = Number(document.getElementById("screen").value);

  let message = "";

  if (!sleep || !activity && activity !== 0 || !screen && screen !== 0) {
    message = "Ве молиме внесете ги сите податоци.";
  } else {
    if (sleep < 7) {
      message += "Спиењето е под препорачаното ниво. Обиди се да спиеш најмалку 7-8 часа.<br>";
    } else {
      message += "Добро! Имаш доволно сон.<br>";
    }

    if (activity < 30) {
      message += "Физичката активност е ниска. Обиди се со кратка прошетка или лесни вежби.<br>";
    } else {
      message += "Одлично! Денес имаш добра физичка активност.<br>";
    }

    if (screen > 5) {
      message += "Времето онлајн е високо. Направи пауза од екраните и одмори ги очите.<br>";
    } else {
      message += "Добар баланс помеѓу онлајн и офлајн живот.<br>";
    }
  }

  document.getElementById("habitResult").innerHTML = message;
}

function newChallenge() {
  const challenges = [
    "Направи 10 минути прошетка без телефон.",
    "Напиши три работи за кои си благодарен/благодарна.",
    "Испиј чаша вода и направи кратка пауза.",
    "Разговарај со пријател или член од семејството.",
    "Исклучи го телефонот 30 минути пред спиење.",
    "Направи 5 минути длабоко дишење.",
    "Слушај омилена музика и опушти се."
  ];

  const random = Math.floor(Math.random() * challenges.length);
  document.getElementById("challengeText").innerText = challenges[random];
}

function saveDiary() {
  const diary = document.getElementById("diary").value;

  if (diary.trim() === "") {
    document.getElementById("diaryMessage").innerText = "Внеси кратка белешка пред зачувување.";
  } else {
    localStorage.setItem("dailyDiary", diary);
    document.getElementById("diaryMessage").innerText = "Белешката е успешно зачувана во прелистувачот.";
  }
}