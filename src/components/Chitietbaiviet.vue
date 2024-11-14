<template>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <div class="container">
        <div class="post-page">
            <div class="post-content">
            <!-- Tiêu đề bài viết -->
            <h1 class="post-title">Phương pháp tập Pilates giúp phục hồi chấn thương cột sống</h1>

            <!-- Hình ảnh đầu tiên -->
            <img src="../components/images/tap-pilates1.jpg" alt="Pilates Exercise" class="post-image" />

            <!-- Nội dung đoạn văn bản -->
            <p>
                Tập Pilates có thể vẫn còn khá xa lạ với người Việt, nhưng tại các nước phương Tây thì đây chính là
                phương pháp tập thể dục giúp duy trì vóc dáng, tăng cường ý chí và cải thiện sự linh hoạt, dẻo dai cho
                người tập. Đặc biệt, các bài tập Pilates còn có khả năng trị đau lưng, là giải pháp hữu hiệu để phục hồi
                chấn thương cột sống. Sau đây hãy cùng tìm hiểu các phương pháp tập luyện này giúp phục hồi chấn thương cột
                sống nhé!
            </p>

            

            <h1 class="post-title">Pilates giúp phục hồi chấn thương cột sống nhanh chóng</h1>

            <!-- Hình ảnh thứ hai -->
            <img src="../components/images/tap-piltes.jpg" alt="Pilates Exercise 2" class="post-image" />

            <!-- Tiêu đề phụ và nội dung tiếp theo -->
            <h2>Phương pháp tập Pilates Cat Cow</h2>
            <p>
                Các bước thực hiện:
            </p>
            <ul>
                <li>Bắt đầu với tư thế 4 điểm. Vai và cổ tay bạn phải thẳng hàng và vuông góc với thảm , lưng bạn phải thẳng
                    và xương chậu của bạn phải cân đối.
                </li>
                <li>Hít vào, nâng cằm, căng ngực...</li>
                <li>Lặp lại động tác từ 5-7 lần...</li>
            </ul>

            <h3>Lời kết</h3>
            <p>
                Trên đây là phương pháp tập Pilates giúp phục hồi chấn thương cột sống nhanh chóng...
            </p>

            </div>

            <!-- Phần bình luận -->
            <div class="comments-section">
            <h3>Bình luận và viết tại đây</h3>
            <textarea v-model="newComment" placeholder="Nhập bình luận của bạn"></textarea>
            <button @click="addComment">Gửi bình luận</button>

            <h4>Danh sách các bình luận:</h4>
            <ul>
                <li v-for="comment in comments" :key="comment">{{ comment }}</li>
            </ul>
            </div>
        </div>

    </div>
  </template>
  
  <script>
  export default {
    name: "ChiTietPage",

    data() {
    return {
      newComment: "",
      comments: ["Bình An: Bài viết rất hữu ích", "Bình An: Cảm ơn những chia sẻ bổ ích"],
    };
  },
  methods: {
    addComment() {
      if (this.newComment) {
        this.comments.push(this.newComment);
        this.newComment = "";
      }
    },
  },
};

  </script>

<style scoped>
/* Căn chỉnh chung cho toàn trang */
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
  line-height: 1.6;
}

.post-page {
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.post-title {
  font-size: 24px;
  font-weight: bold;
  color: #333;
  margin-top: 10px;
  margin-bottom: 15px;
  text-align: center;
}

.post-image {
  width: 100%;
  max-height: 400px;
  object-fit: cover;
  margin: 20px 0;
  border-radius: 8px;
}

.post-content p {
  color: #555;
  font-size: 16px;
  margin-bottom: 20px;
  text-align: justify;
}

.post-content ul {
  list-style-type: disc;
  margin-left: 20px;
  padding-left: 20px;
  color: #555;
}

.post-content li {
  margin-bottom: 10px;
}

.comments-section {
  margin-top: 40px;
  padding-top: 20px;
  border-top: 1px solid #ddd;
}

.comments-section h3,
.comments-section h4 {
  font-size: 20px;
  color: #333;
  margin-bottom: 10px;
}

.comments-section textarea {
  width: 100%;
  height: 80px;
  padding: 10px;
  font-size: 16px;
  margin-bottom: 10px;
  border-radius: 4px;
  border: 1px solid #ddd;
  resize: vertical;
}

.comments-section button {
  padding: 10px 20px;
  font-size: 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.comments-section button:hover {
  background-color: #0056b3;
}

.comments-section ul {
  list-style-type: none;
  padding: 0;
}

.comments-section li {
  padding: 10px;
  background-color: #f1f1f1;
  margin-bottom: 10px;
  border-radius: 4px;
  font-size: 16px;
  color: #333;
}
</style>

