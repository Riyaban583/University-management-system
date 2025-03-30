document.addEventListener("DOMContentLoaded", function () {
    const monthYear = document.getElementById("monthYear");
    const calendarBody = document.getElementById("calendar-body");
    const prevMonthBtn = document.getElementById("prevMonth");
    const nextMonthBtn = document.getElementById("nextMonth");

    let currentDate = new Date();

    const events = {
        "2025-03-10": "Guest Lecture on AI at 10 AM",
        "2025-03-15": "Sports Tournament at 5 PM",
        "2025-03-20": "Job Fair for Students",
        "2025-03-25": "Hackathon Challenge",
    };

    function renderCalendar() {
        calendarBody.innerHTML = "";
        const firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
        const lastDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
        monthYear.innerText = currentDate.toLocaleString("default", { month: "long", year: "numeric" });

        let date = 1;
        for (let i = 0; i < 6; i++) {
            let row = document.createElement("tr");
            for (let j = 0; j < 7; j++) {
                let cell = document.createElement("td");

                if (i === 0 && j < firstDay) {
                    cell.innerText = "";
                } else if (date > lastDate) {
                    break;
                } else {
                    let formattedDate = `${currentDate.getFullYear()}-${(currentDate.getMonth() + 1)
                        .toString()
                        .padStart(2, "0")}-${date.toString().padStart(2, "0")}`;

                    cell.innerText = date;
                    if (events[formattedDate]) {
                        cell.classList.add("event-day");
                        cell.dataset.event = events[formattedDate];
                        cell.addEventListener("click", showEventPopup);
                    }
                    date++;
                }
                row.appendChild(cell);
            }
            calendarBody.appendChild(row);
        }
    }

    function showEventPopup(event) {
        const eventPopup = document.getElementById("event-popup");
        const eventInfo = document.getElementById("event-info");
        eventInfo.textContent = event.target.dataset.event;
        eventPopup.style.display = "block";
    }

    function closePopup() {
        document.getElementById("event-popup").style.display = "none";
    }

    prevMonthBtn.addEventListener("click", () => {
        currentDate.setMonth(currentDate.getMonth() - 1);
        renderCalendar();
    });

    nextMonthBtn.addEventListener("click", () => {
        currentDate.setMonth(currentDate.getMonth() + 1);
        renderCalendar();
    });

    renderCalendar();
});
