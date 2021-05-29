var seats = [];
for (var i = 1; i < 11; i++) {
    seats[i] = false;
}
function reserve(bValue) {
    var msg = " ";
    var seatNo = document.getElementById("sNo").value;
    seatNo = Number(seatNo) - 1;
    if (bValue) {
        if (seats[seatNo]) {
            msg = seatNo + 1 + "번 좌석은 이미 예약되었습니다.";
        } else {
            seats[seatNo] = true;
            showSeatColor(bValue, seatNo + 1);
        }
    } else {
        if (!seats[seatNo]) {
            msg = seatNo + 1 + "번 좌석은 예약이 없습니다.";
        } else {
            seats[seatNo] = false;
            showSeatColor(bValue, seatNo + 1);
        }
    }
    var dMsg = document.getElementById("msg");
    dMsg.innerHTML = msg;
}
function showSeatColor(bValue, seatNo) {
    var seatld = document.getElementById("s" + seatNo);
    if (bValue)
        seatld.style.backgroundColor = 'cyan';
    else
        seatld.style.backgroundColor = 'white';
}