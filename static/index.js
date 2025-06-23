const all_number = document.querySelectorAll(".number button"),
  calculation_input = document.getElementById("calculationInput"),
  answer_input = document.getElementById("answerInput"),
  all_symbol = document.querySelectorAll(".sign button"),
  special_symbol = document.querySelectorAll(".special_sign button");

function get_claculation_val() {
  return calculation_input.value;
}
function update_claculation_val(update) {
  calculation_input.value = update;
}
function calculatePercentage(value, percent) {
  percent = percent || 1;
  return (value * percent) / 100;
}
document
  .querySelector(".allclear button")
  .addEventListener("click", function () {
    calculation_input.value = "0";
    answer_input.value = "0";
  });
document.querySelector(".clear button").addEventListener("click", function () {
  let val = get_claculation_val();
  if (val != "0") {
    val = val.slice(0, -1);
    update_claculation_val(val);
  }
  if (val == "") {
    update_claculation_val("0");
  }
  answer_input.value = "0";
});

all_number.forEach((ele) => {
  ele.addEventListener("click", () => {
    if (calculation_input.value == "0") {
      calculation_input.value = "";
    }
    calculation_input.value += ele.textContent;
  });
});

all_symbol.forEach((ele) => {
  ele.addEventListener("click", () => {
    let val = get_claculation_val();
    const lastChar = val.charAt(val.length - 1);
    const operators = ["/", "×", "-", "+", "%"];
    if (val != 0 && !operators.includes(lastChar)) {
      calculation_input.value += ele.textContent;
    } else if (operators.includes(lastChar)) {
      val = val.slice(0, -1) + ele.textContent;
      update_claculation_val(val);
    }
  });
});
document.querySelector(".dot button").addEventListener("click", () => {
  let val = get_claculation_val();
  const lastChar = val.charAt(val.length - 1);
  if (val != "0" && lastChar != ".") {
    val = `${val}.`;
    update_claculation_val(val);
  } else if (val != "0" && lastChar == ".") {
    update_claculation_val(val.slice(0, -1));
  }
});
document.querySelector(".plush_minus button").addEventListener("click", () => {
  let val = get_claculation_val();
  if (val != "0" && val[0] != "-") {
    val = `-${val}`;
    update_claculation_val(val);
  } else if (val != "0" && val[0] == "-") {
    update_claculation_val(val.slice(1));
  }
});

//!for percesent button
document.querySelector(".percent button").addEventListener("click", () => {
  let val = get_claculation_val();
  const lastChar = val.charAt(val.length - 1);
  const operators = ["/", "×", "-", "+", "."];
  if (val != "0" && lastChar != "%" && !operators.includes(lastChar)) {
    val = `${val}%`;
    update_claculation_val(val);
  } else if (val != "0" && lastChar == "%") {
    update_claculation_val(val.slice(0, -1));
  }
});
//! for answer
document.querySelector(".answer button").addEventListener("click", () => {
  let val = get_claculation_val();
  val = val.replace(/×/g, "*");
      sendRequest("calculate",val,false)

});

//! for special_sign
special_symbol[0].addEventListener("click", () => {
  let val =
    answer_input.value != 0 ? answer_input.value : get_claculation_val();
    sendRequest("calculatePow",val,true)

});
special_symbol[1].addEventListener("click", () => {
  let val = get_claculation_val();
      sendRequest("calculateSqrt",val,false)

  // const square_val = Math.sqrt(val);
  // answer_input.value = square_val;
});
special_symbol[2].addEventListener("click", () => {
  let val = get_claculation_val();
        sendRequest("calculateCbrt",val,false)

  // const square_val = Math.cbrt(val);
  // answer_input.value = square_val;
});
special_symbol[3].addEventListener("click", () => {
  let val =
    answer_input.value != 0 ? answer_input.value : get_claculation_val();
        sendRequest("calculatePow3",val,true)
});

//!for time upadte
function updateTime() {
  const timeDisplay = document.getElementById("time");
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const ampm = hours >= 12 ? "PM" : "AM";
  const formattedHours = hours % 12 || 12;
  const formattedMinutes = minutes.toString().padStart(2, "0");
  const timeString = `${formattedHours}:${formattedMinutes} ${ampm}`;
  timeDisplay.textContent = timeString;
}
setInterval(updateTime, 1000);
updateTime();

//send request to backend

function sendRequest(path, val, is_update_screen) {
  fetch(`/${path}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ expression: val }),
  })
    .then((res) => res.json())
    .then((data) => {
      answer_input.value = data.result;
      if (is_update_screen) update_claculation_val(val);
    })
    .catch((error) => {
      answer_input.value = "Error";
      console.error("Error:", error);
    });
}
