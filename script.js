// // 1. تغيير لون البطاقة عند الضغط عليها
// const card = document.querySelector('.card');
// let toggle = false;

// card.addEventListener('click', () => {
//   if (!toggle) {
//     card.style.backgroundColor = '#f0f0f0';
//   } else {
//     card.style.backgroundColor = 'white';
//   }
//   toggle = !toggle;
// });

// // 2. عرض رسالة عند الضغط على عنوان المقال
// const title = document.querySelector('.title a');

// title.addEventListener('click', (e) => {
//   e.preventDefault(); // منع الانتقال بالرابط
//   alert('أنت ضغطت على العنوان: HTML & CSS foundations');
// });

// // 3. تغيير صورة الكاتب عند الضغط على زر
// function changeAuthorImage() {
//   const img = document.querySelector('.author-name img');
//   img.src = 'https://i.pravatar.cc/150?img=32'; // صورة عشوائية
// }

// // 4. عداد ضغطات على البطاقة
// let count = 0;
// const counterBox = document.createElement('p');
// counterBox.style.fontSize = '12px';
// counterBox.style.color = '#666';
// counterBox.style.marginTop = '10px';
// card.appendChild(counterBox);

// card.addEventListener('click', () => {
//   count++;
//   counterBox.textContent = `تم الضغط على البطاقة ${count} مرة`;
// });
