document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault();
            
    const nama = document.getElementById('nama').value;
    const namaBelakang = document.getElementById('namaBelakang').value;
    const nilai = document.getElementById('nilai').value;
    let nilaiHuruf = '';
    if (nilai >= 85) {
        nilaiHuruf = 'A';
    } else if (nilai >= 80) {
        nilaiHuruf = 'A-';
    } else if (nilai >= 75) {
        nilaiHuruf = 'B+';
    } else if (nilai >= 70) {
        nilaiHuruf = 'B';
    } else if (nilai >= 65) {
        nilaiHuruf = 'B-';
    } else if (nilai >= 60) {
        nilaiHuruf = 'C+';
    } else if (nilai >= 55) {
        nilaiHuruf = 'C';
    } else if (nilai >= 40) {
        nilaiHuruf = 'D';
    } else {
        nilaiHuruf = 'E';
    }

    console.log('Nama Lengkap:', nama + ' ' + namaBelakang);
    console.log('Nilai Angka:', nilai);
    console.log('Nilai Huruf:', nilaiHuruf);
    
    alert('Registrasi berhasil!\n\nData yang diisi:\nNama Depan: ' + nama + '\nNama Belakang: ' + namaBelakang);
    
    this.reset();
});