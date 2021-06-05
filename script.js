const timeDisplay = document.querySelector(".display-time");
let wish = ``;
const now = new Date();
let hour = now.getHours();
const minute = now.getMinutes();
const day = now.getDay();
const month = now.getMonth();
const date = now.getDate();
const ampm = hour >= 12 ? "am" : "pm";
if (hour >= 5 && hour < 12) wish = "Morning";
if (hour >= 12 && hour < 17) wish = "Afternoon";
if (hour >= 17 && hour < 5) wish = "Evening";
hour = hour % 12;
//prettier-ignore
const monthList=["jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"]
const weekList = ["mon", "tue", "wed", "thr", "fri", "sat", "sun"];
const html = `<h1>Hey Good ${wish}</h1>
<h3>it's ${monthList[month]}: ${date}, ${weekList[day]} ${wish}</h3>
<h3>TIME ${hour}:${minute}${ampm} </h3>
`;
timeDisplay.insertAdjacentHTML("afterbegin", html);
