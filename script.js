let batteryLevel = 100;

let alarmCount = 0;

function setClock(){

    const now = new Date();

    let hour = now.getHours();

    let minute = now.getMinutes();

    let second = now.getSeconds();

    if(hour < 10){

        hour = "0" + hour;

    }

    if(minute < 10){

        minute = "0" + minute;

    }

    if(second < 10){

        second = "0" + second;

    }

    const clock = document.getElementById("clock");

    const battery = document.getElementById("battery");

    clock.textContent = hour + ":" + minute + ":" + second;

    battery.textContent = batteryLevel + "%";

    if(batteryLevel > 0){

    batteryLevel = batteryLevel - 1;

}

    if(batteryLevel == 0){

        document.body.style.backgroundColor = "black";

        clock.textContent = "";

        battery.textContent = "";

}

}

setClock();

setInterval(setClock, 1000);

const addButton = document.getElementById("addAlarm");

addButton.onclick = addAlarm;

function addAlarm(){

    if(alarmCount == 3){

        alert("알람은 최대 3개까지만 추가할 수 있습니다.");

        return;

    }

    const h = hour.value;

    const m = minute.value;

    const s = second.value;

    const list = document.createElement("li");

    list.textContent = h + " : " + m + " : " + s + " ";

    const deleteButton = document.createElement("button");

    deleteButton.textContent = "삭제";

    deleteButton.onclick = function(){

        alarmList.removeChild(list);

        alarmCount = alarmCount - 1;

    };

    list.appendChild(deleteButton);

    alarmList.appendChild(list);

    alarmCount = alarmCount + 1;

}