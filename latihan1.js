document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault();
            
    const nama = document.getElementById('nama').value;
    const namaBelakang = document.getElementById('namaBelakang').value;
    
    console.log('Nama Lengkap:', nama + ' ' + namaBelakang);
            
    alert('Registrasi berhasil!\n\nData yang diisi:\nNama Depan: ' + nama + '\nNama Belakang: ' + namaBelakang);
    
    this.reset();
});