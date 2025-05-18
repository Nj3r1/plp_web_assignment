// 1. Event Handling 🎈
document.getElementById('clickBtn').addEventListener('click', () => {
  alert('Button clicked!');
});

document.getElementById('hoverBtn').addEventListener('mouseover', () => {
  alert('Hovered!');
});

document.getElementById('keypressInput').addEventListener('keydown', (e) => {
  console.log(`You pressed: ${e.key}`);
});

document.getElementById('secretBtn').addEventListener('dblclick', () => {
  alert('🎉 Secret unlocked!');
});

// 2. Interactive Elements 🎮
document.getElementById('colorBtn').addEventListener('click', function () {
  this.style.backgroundColor = 'lightblue';
  this.textContent = 'Color Changed!';
});

// Tabs
document.querySelectorAll('.tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
    document.getElementById(`tab${tab.dataset.tab}`).classList.add('active');
  });
});

// Gallery
const images = [
  "https://via.placeholder.com/200?text=1",
  "https://via.placeholder.com/200?text=2",
  "https://via.placeholder.com/200?text=3"
];
let currentImage = 0;

document.getElementById('nextImage').addEventListener('click', () => {
  currentImage = (currentImage + 1) % images.length;
  document.getElementById('galleryImage').src = images[currentImage];
});

// 3. Form Validation 📋✅
const form = document.getElementById('myForm');
const feedback = document.getElementById('feedback');
const password = document.getElementById('password');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (password.value.length < 8) {
    feedback.textContent = 'Password must be at least 8 characters!';
    feedback.style.color = 'red';
  } else {
    feedback.textContent = 'Form submitted successfully!';
    feedback.style.color = 'green';
  }
});

// Real-time feedback
password.addEventListener('input', () => {
  if (password.value.length < 8) {
    feedback.textContent = 'Too short!';
    feedback.style.color = 'red';
  } else {
    feedback.textContent = 'Looks good!';
    feedback.style.color = 'green';
  }
});
