function notifyMe () {
    var notification = new Notification ("Ваш заказ готов", {
        tag : "ache-mail",
        body : "Ваша пицца готова, она ждет Ваш на кассе!",
        icon : "/img/Pizza.svg.png"
    });
}

function notifSet () {
    if (!("Notification" in window))
        alert ("Ваш браузер не поддерживает уведомления.");
    else if (Notification.permission === "granted")
        setTimeout(notifyMe, 2000);
    else if (Notification.permission !== "denied") {
        Notification.requestPermission (function (permission) {
            if (!('permission' in Notification))
                Notification.permission = permission;
            if (permission === "granted")
                setTimeout(notifyMe, 2000);
        });
    }
}

