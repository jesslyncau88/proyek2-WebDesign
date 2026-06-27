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

        if (!nama || !tanggal || !layanan) {
            alert("Semua data harus di isi!");
            return;
        }

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

function initRiwayat() {
    const tbody = document.getElementById("dataTable");
    if (!tbody) return;

    renderTable();

    function renderTable() {
        const data = getData();

        tbody.innerHTML = "";

        data.forEach((item) => {
            const tr = document.createElement("tr");

            tr.innerHTML = `
                <td>${item.nama}</td>
                <td>${item.tanggal}</td>
                <td>${item.layanan}</td>
                <td>
                    <button class="hapus" data-id="${item.id}">
                        Hapus
                    </button>
                </td>
            `;

            tbody.appendChild(tr);
        });
    }
}

document.addEventListener("DOMContentLoaded", function () {

    if (document.getElementById("formReservasi")) {
        initForm();
    }
});