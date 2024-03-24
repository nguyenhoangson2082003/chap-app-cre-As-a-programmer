// Danh sách các emoji
const emojis = ["😀", "😊", "😎", "😍", "🥳", "🤩", "😂", "😜", "😇", "🤗"];

// Hàm trả về emoji ngẫu nhiên từ danh sách
function getRandomEmoji() {
  // Chọn một số nguyên ngẫu nhiên từ 0 đến chiều dài của mảng emojis
  const randomIndex = Math.floor(Math.random() * emojis.length);
  // Trả về emoji tương ứng với chỉ số ngẫu nhiên được chọn
  return emojis[randomIndex];
}

export default getRandomEmoji;
