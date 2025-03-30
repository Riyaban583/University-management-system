const announcements = document.querySelectorAll('.announcement-box');
let index = 0;

function showNextAnnouncement() {
    announcements[index].style.display = 'none';
    index = (index + 1) % announcements.length;
    announcements[index].style.display = 'block';
}

setInterval(showNextAnnouncement, 5000);
