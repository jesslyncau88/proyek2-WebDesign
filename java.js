function getData() {
    return JSON.parse(localStorage.getItem("reservasiData")) || [];
}

function saveData(data) {
    localStorage.setItem("reservasiData", JSON.stringify(data));
}

function initForm() {
    const form = document.getElementById("formReservasi");
    if (!form) return;

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const nama = document.getElementById("nama").value.trim();
        const tanggal = document.getElementById("tanggal").value;
        const layanan = document.getElementById("layanan").value;

        const data = getData();

        data.push({
            id: Date.now(),
            nama: nama,
            tanggal: tanggal,
            layanan: layanan
        });

        saveData(data);

        window.location.href = "riwayat.html";
    });
}
