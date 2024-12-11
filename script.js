document.addEventListener('DOMContentLoaded', function() {
    initializeCalendar();
    loadEvents();
});
function centerText() {
    const header = document.getElementById('header');
    const paragraph = document.getElementById('paragraph');

    header.style.textAlign = 'center';
    paragraph.style.textAlign = 'center';
}

centerText();

document.addEventListener('DOMContentLoaded', function() {
    initializeCalendar();
    loadEvents();
});

const events = [
    { name: "Basketball Tournament", date: "12/13/2024", price: "$25" },
    { name: "Local Band Concert", date: "12/20/2024", price: "$35" },
    { name: "Trade Show", date: "12/27/2024", price: "$15" }
];

function initializeCalendar() {
    const calendar = document.getElementById('calendar');
    const currentDate = new Date();
    
    const firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
    const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
    
    let calendarHTML = `
        <h3> December 2024 Calendar</h3>
        <div class="calendar-grid">
            <div>Sun</div>
            <div>Mon</div>
            <div>Tue</div>
            <div>Wed</div>
            <div>Thu</div>
            <div>Fri</div>
            <div>Sat</div>
    `;

    for (let i = 0; i < firstDay; i++) {
        calendarHTML += '<div></div>';
    }

    for (let day = 1; day <= daysInMonth; day++) {
        let clickFunction = `showNoEvent(${day})`;
        
        if (day === 13) {
            clickFunction = 'showBasketballEvent()';
        } else if (day === 20) {
            clickFunction = 'showConcertEvent()';
        } else if (day === 27) {
            clickFunction = 'showTradeShowEvent()';
        }
        
        calendarHTML += `<div class="calendar-day" onclick="${clickFunction}">${day}</div>`;
    }

    calendarHTML += '</div>';
    calendar.innerHTML = calendarHTML;
}

function showBasketballEvent() {
    alert("Basketball Tournament scheduled for 12/13/2024");
}

function showConcertEvent() {
    alert("Local Band Concert scheduled for 12/20/2024");
}

function showTradeShowEvent() {
    alert("Trade Show scheduled for 12/27/2024");
}

function showNoEvent(day) {
    alert(`No events scheduled for 12/${day}/2024`);
}

function loadEvents() {
    const eventList = document.getElementById('eventList');
    eventList.innerHTML = '';
    
    events.forEach(event => {
        eventList.innerHTML += `
            <div class="event-item">
                <h3>${event.name}</h3>
                <p>Date: ${event.date}</p>
                <p>Price: ${event.price}</p>
                <button onclick="purchaseTickets('${event.name}')">Purchase Tickets</button>
            </div>
        `;
    });
}

function searchEvents() {
    const searchTerm = document.getElementById('eventSearch').value.toLowerCase();
    const filteredEvents = events.filter(event => 
        event.name.toLowerCase().includes(searchTerm)
    );
    
    const eventList = document.getElementById('eventList');
    eventList.innerHTML = '';
    
    filteredEvents.forEach(event => {
        eventList.innerHTML += `
            <div class="event-item">
                <h3>${event.name}</h3>
                <p>Date: ${event.date}</p>
                <p>Price: ${event.price}</p>
                <button onclick="purchaseTickets('${event.name}')">Purchase Tickets</button>
            </div>
        `;
    });
}

function purchaseTickets(eventName) {
    alert(`Purchase Succesful!`);
}

function showRentalForm() {
    alert("VENUE RENTAL INFORMATION\n" +
          "------------------------\n" +
          "Capacity: Up to 3,500 seats\n" +
          "\n" +
          "Available For:\n" +
          "• Local Sporting Events\n" +
          "• Live Concerts\n" +
          "• Trade Shows\n" +
          "• Community Events\n" +
          "\n" +
          "Rental Cost: $2,000 per day\n" +
          "(Rates may vary based on event type and duration)");
}