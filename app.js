const unreadMessages = document.querySelectorAll(".unread");
const readAll = document.getElementById("readAll");
const notifCount = document.getElementById("notifCount");

notifCount.innerText = unreadMessages.length;

readAll.addEventListener("click", () => {
    unreadMessages.forEach((m) => {
        m.classList.remove("unread");
    })
    let unreadCount = document.querySelectorAll(".unread");
    notifCount.innerText = unreadCount.length;
});