function submitOrder() {
    const packageSelect = document.getElementById('package');
    const selectedValue = packageSelect.value;
    const selectedText = packageSelect.options[packageSelect.selectedIndex].text;
    const infoDiv = document.getElementById('info');

    infoDiv.innerHTML = `
        <h4>Pesanan Anda</h4>
        <p>Paket: ${selectedText}</p>
        <p>Silakan lakukan pembayaran untuk mendapatkan Robux.</p>
    `;
}

// Fungsi Login
function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if (username === '' || password === '') {
        alert('Mohon isi username dan password!');
        return;
    }
    
    alert('Login berhasil! Selamat datang, ' + username);
}

// Fungsi untuk menampilkan/menyembunyikan Bagian Beranda
function toggleBeranda() {
    const berandaSection = document.getElementById('berandaContent');
    berandaSection.classList.toggle('show');
    
    // Sembunyikan section lain saat Beranda ditampilkan
    document.getElementById('topupContent').classList.remove('show');
    document.getElementById('bantuanContent').classList.remove('show');
}

// Fungsi untuk menampilkan/menyembunyikan Bagian Top Up
function toggleTopUp() {
    const topupSection = document.getElementById('topupContent');
    topupSection.classList.toggle('show');
    
    // Sembunyikan section lain saat Top Up ditampilkan
    document.getElementById('berandaContent').classList.remove('show');
    document.getElementById('bantuanContent').classList.remove('show');
}

// Fungsi untuk menampilkan/menyembunyikan Bagian Bantuan
function toggleBantuan() {
    const bantuanSection = document.getElementById('bantuanContent');
    bantuanSection.classList.toggle('show');
    
    // Sembunyikan section lain saat Bantuan ditampilkan
    document.getElementById('berandaContent').classList.remove('show');
    document.getElementById('topupContent').classList.remove('show');
}
