// Smooth Scrolling for Navigation Links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Load saved theme from localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    document.body.classList.add('dark-theme');
}

// Toggle Light/Dark Theme
function toggleTheme() {
    document.body.classList.toggle('dark-theme');
    const currentTheme = document.body.classList.contains('dark-theme') ? 'dark' : 'light';
    localStorage.setItem('theme', currentTheme);
}


// Form Submission Handling
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Terima kasih telah menghubungi saya!');
    this.reset();
});

function animateCard(card) {
    // Tambah class active-card untuk memicu animasi
    card.classList.add('active-card');

    // Hapus class active-card setelah animasi selesai (0.4s)
    setTimeout(() => {
        card.classList.remove('active-card');
    }, 400);
}






function toggleTheme() {
   const body = document.body;
    body.classList.toggle('dark-theme');
    body.classList.toggle('light-theme'); // Menambah kelas light-theme saat switch
}

function animateCard(card) {
    // Tambahkan kelas animate pada kartu
    card.classList.toggle('animate');
    
    // Menghilangkan kelas setelah animasi selesai untuk memungkinkan animasi ulang
    setTimeout(() => {
        card.classList.remove('animate');
    }, 300); // Durasi sesuai dengan durasi transisi CSS
}



// Simpan tema ke local storage
document.getElementById('theme-toggle').addEventListener('click', () => {
    localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
    toggleTheme(); // Panggil fungsi untuk mengubah tema
});

