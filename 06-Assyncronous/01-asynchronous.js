// 1. Apa itu synchronous?
// Syncronous (online lansung) merupakan komunikasi secara langsung seperti halnya Video Call dan Chattting.

// 2. Apa itu asynchronous?
// An asynchronous operation is one that allows the computer to “move
// on” to other tasks while waiting for the asynchronous operation to
// complete. Asynchronous programming means that time-consuming
// operations don’t have to bring everything else in our programs to a
// halt.

// 3. Dapatkah kita menerapkan konsep asynchronous pada browser?
// tentu saja bisa, pada dasarnya asynchronous memberikan kemudahan kepada browser untuk menjalankan perintah yang diminta.
// Kode yang dituliskan secara asynchronous akan dieksekusi di belakang thread utama atau biasa disebut main thread.
// Hal tersebut tidak akan membloking proses runtime atau menunggu hingga proses selesai dilakukan.
// Sembari menunggu proses tersebut selesai, compiler akan mengeksekusi perintah kode selanjutnya.

// 4. Apa hasil yang akan tercetak pada baris kode dibawah?
// // first log:
// 01-asynchronous.js:24 first log:  2
// 01-asynchronous.js:24 first log:  3
// 01-asynchronous.js:24 first log:  4
// 01-asynchronous.js:24 first log:  5
// // second log:
// 01-asynchronous.js:25 second log:  1
// 01-asynchronous.js:25 second log:  2
// 01-asynchronous.js:25 second log:  3
// 01-asynchronous.js:25 second log:  4
// 01-asynchronous.js:25 second log:  5

// 5. Apabila terdapat ketidak samaan antara console.log pertama dan kedua, bisakah kalian memberikan penjelasan mengapa hal tersebut bisa terjadi
// berdasarkan hasil yang ditampilkan kedua console.log memiliki nilai yang sama namun letak perbedaan dari kedua eksekusi tersebut adalah waktu delaynya. dimana untuk second log di set waktu ke 100 second. sedangkan first log tidak.

// 6. Perbaiki baris kode dibawah sehingga ia akan menampilkan angka yang sama
for (let i = 1; i <= 5; i++) {
  console.log("first log: ", i); // 01 - Pertama
  setTimeout(() => console.log("second log: ", i), 100); // 02 - Kedua
}

// perbaikan
for (let i = 1; i <= 5; i++) {
  console.log("first log: ", i); //1 pertama
  setTimeout(() => console.log("second log:", i), 100); // 02 - Kedua
}
