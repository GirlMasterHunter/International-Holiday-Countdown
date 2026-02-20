import { getNextHoliday } from "./api.js";
import { startCountdown } from "./countdown.js";

const buttons = document.querySelectorAll("button");
const nameEl = document.getElementById("holidayName");
const dateEl = document.getElementById("holidayDate");

buttons.forEach(button => {

    button.addEventListener("click", async () => {

        buttons.forEach(b => b.classList.remove("active"));
        button.classList.add("active");

        const country = button.dataset.country;

        const holiday = await getNextHoliday(country);

        nameEl.textContent = holiday.localName;

        const formattedDate = new Date(holiday.date)
            .toLocaleDateString();

        dateEl.textContent = formattedDate;

        startCountdown(holiday.date);
    });
});