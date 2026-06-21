document.addEventListener("DOMContentLoaded", () => {

    const participantsInput =
    document.getElementById("participantsInput");

    const loadNamesBtn =
    document.getElementById("loadNamesBtn");

    const spinBtn =
    document.getElementById("spinBtn");

    const winnerName =
    document.getElementById("winnerName");

    const wheel =
    document.getElementById("wheel");

    const prizeInput =
    document.getElementById("prizeInput");


    let participants =
    JSON.parse(localStorage.getItem("participants")) || [];



    // =========================
    // LOAD SAVED DATA
    // =========================

    if(participants.length > 0){

        participantsInput.value =
        participants.join("\n");

        updateWheel();

    }



    // =========================
    // LOAD NAMES
    // =========================

    loadNamesBtn.addEventListener("click", () => {

        const names =
        participantsInput.value
        .split("\n")
        .map(name => name.trim())
        .filter(name => name !== "");

        participants = names;

        localStorage.setItem(
            "participants",
            JSON.stringify(participants)
        );

        updateWheel();

        alert(
            `تم تحميل ${participants.length} مشارك`
        );

    });



    // =========================
    // UPDATE WHEEL
    // =========================

    function updateWheel(){

        if(participants.length === 0){

            wheel.innerHTML =
            "<span>لا يوجد مشاركون</span>";

            return;

        }

        wheel.innerHTML = `
            <div style="
                padding:20px;
                text-align:center;
                line-height:2;
            ">
                ${participants.join("<br>")}
            </div>
        `;
    }



    // =========================
    // SPIN
    // =========================

    spinBtn.addEventListener("click", () => {

        if(participants.length === 0){

            alert(
                "أضف المشاركين أولاً"
            );

            return;
        }

        spinBtn.disabled = true;

        winnerName.classList.remove(
            "winner-active"
        );



        const randomIndex =
        Math.floor(
            Math.random() *
            participants.length
        );



        const winner =
        participants[randomIndex];



        const extraRotation =
        3600 +
        Math.floor(Math.random()*720);



        wheel.style.transform =
        `rotate(${extraRotation}deg)`;


        setTimeout(() => {

            const prize =
            prizeInput.value.trim();

            winnerName.innerHTML =

            prize
            ?

            `
            🎉 ${winner}
            <br>
            <small>
            فاز بـ ${prize}
            </small>
            `

            :

            `🎉 ${winner}`;



            winnerName.classList.add(
                "winner-active"
            );



            // حذف الفائز من السحب القادم

            participants.splice(
                randomIndex,
                1
            );



            localStorage.setItem(
                "participants",
                JSON.stringify(participants)
            );



            participantsInput.value =
            participants.join("\n");



            updateWheel();



            spinBtn.disabled = false;

        }, 5000);

    });

});
