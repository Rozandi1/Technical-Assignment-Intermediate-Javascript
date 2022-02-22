// 1. Apa itu synchronous?
// An asynchronous operation is one that allows the computer to “move   
// on” to other tasks while waiting for the asynchronous operation to 
// complete. Asynchronous programming means that time-consuming 
// operations don’t have to bring everything else in our programs to a 
// halt.
// 2. Apa itu asynchronous?
// 3. Dapatkah kita menerapkan konsep asynchronous pada browser?
// 4. Apa hasil yang akan tercetak pada baris kode dibawah?
// 5. Apabila terdapat ketidak samaan antara console.log pertama dan kedua, bisakah kalian memberikan penjelasan mengapa hal tersebut bisa terjadi
// 6. Perbaiki baris kode dibawah sehingga ia akan menampilkan angka yang sama
for (let i = 1; i<=5; i++) {
    console.log("first log: ", i); // 01 - Pertama
    setTimeout(() => console.log("second log: ", i), 100); // 02 - Kedua
  }