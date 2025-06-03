function kirimData(event) {
  event.preventDefault(); 

  var name = document.getElementById("nama").value;
  var nim = document.getElementById("nim").value;
  var peminatan = document.getElementById("peminatan").value;
  var alamat = document.getElementById("alamat").value;
  var angkatan = document.getElementById("angkatan").value;
  var tanggal = document.getElementById("tanggal").value;

  alert(
    "Nama : " + name +
    "\nNIM : " + nim +
    "\nPeminatan : " + peminatan +
    "\nAlamat : " + alamat +
    "\nAngkatan : " + angkatan +
    "\nTanggal : " + tanggal
  );
}
