// Daftar pengguna manual
const users = [
    { name: "vadly", password: "090624.1" },
    { name: "rifa", password: "090624.2" }
];

// Variabel untuk menghitung percobaan login
let loginAttempts = 0;

// Tangani login
const loginForm = document.getElementById("loginForm");
const statusMessage = document.getElementById("statusMessage");

loginForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const password = document.getElementById("password").value;

    // Cek kredensial
    const user = users.find(user => user.name === name && user.password === password);
    if (user) {
        statusMessage.textContent = "Login berhasil!";
        statusMessage.classList.remove("text-red-400");
        statusMessage.classList.add("text-green-400");

        // Tunggu sejenak untuk menampilkan pesan berhasil, lalu arahkan ke isi.html
        setTimeout(() => {
            window.location.href = "isi.html"; // Arahkan ke halaman isi.html
        }, 1000); // Tunggu 1 detik sebelum mengalihkan
    } else {
        loginAttempts++; // Tambah jumlah percobaan login
        if (loginAttempts >= 3) {
            alert("JIKA KAMU BUKAN VADLY/RIFA JANGAN COBA COBA BUKA WEB INI");
        } else {
            statusMessage.textContent = `Nama pengguna atau kata sandi salah.`;
            statusMessage.classList.remove("text-green-400");
            statusMessage.classList.add("text-red-400");
        }
    }
});
