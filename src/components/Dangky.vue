<template>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <!-- Đăng ký Thông tin -->
    <div class="col-md-6">
                    <h2>Đăng ký thông tin</h2>
                    <form class="was-validated">
                        <div class="mb-3">
                        <label for="fullname" class="form-label">Họ và Tên:</label>
                        <input type="text" class="form-control" id="fullname" placeholder="Nhập họ và tên" required>
                        <div class="invalid-feedback">Vui lòng điền vào trường này</div>
                        </div>
                        <div class="mb-3">
                        <label for="email" class="form-label">Email:</label>
                        <input type="email" class="form-control" id="email" placeholder="Nhập email" required>
                        <div class="invalid-feedback">Vui lòng nhập email hợp lệ</div>
                        </div>

                        <div class="mb-3">
                        <label for="phone" class="form-label">Số điện thoại:</label>
                        <input type="tel" class="form-control" id="phone" placeholder="Nhập số điện thoại" required>
                        <div class="invalid-feedback">Vui lòng nhập số điện thoại hợp lệ</div>
                        </div>

                        <div class="mb-3">
                        <label for="password" class="form-label">Mật khẩu:</label>
                        <input type="password" class="form-control" id="password" placeholder="Nhập mật khẩu" required>
                        <div class="invalid-feedback">Vui lòng nhập mật khẩu</div>
                        </div>

                        <div class="mb-3">
                            <label for="confirm-password" class="form-label">Xác nhận mật khẩu:</label>
                            <input type="password" class="form-control" id="confirm-password" placeholder="Nhập lại mật khẩu" required>
                            <div class="invalid-feedback">Vui lòng xác nhận mật khẩu</div>
                        </div>

                        <div class="mb-3">
                            <label class="form-label">Giới tính:</label>
                            <div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="gender" id="male" value="male" required>
                                <label class="form-check-label" for="male">Nam</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="gender" id="female" value="female">
                                <label class="form-check-label" for="female">Nữ</label>
                            </div>
                            </div>
                        </div>

                        <div class="mb-3">
                            <label for="language" class="form-label">Ngôn ngữ:</label>
                            <select class="form-select" id="language" required>
                            <option selected disabled value="">Chọn ngôn ngữ</option>
                            <option value="vietnamese">Tiếng Việt</option>
                            <option value="english">Tiếng Anh</option>
                            </select>
                            <div class="invalid-feedback">Vui lòng chọn một ngôn ngữ</div>
                        </div>
                        
                        <div class="form-check mb-3">
                            <input class="form-check-input" type="checkbox" id="terms" required>
                            <label class="form-check-label" for="terms">Đồng ý với các điều khoản</label>
                            <div class="invalid-feedback">Vui lòng đồng ý với điều khoản</div>
                        </div>

                        <button type="submit" class="btn btn-primary">Đăng ký</button>
                    </form>
                    </div>
</template>
<script>
    export default {
        name:'DangkyPage'
    };
</script>

<style scoped>
/* Tùy chỉnh giao diện form đăng ký */
.col-md-6 {
  margin: 20px auto;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
}

h2 {
  color: #333;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
}

.form-label {
  font-weight: 500;
}

.form-control, .form-select {
  padding: 10px;
  font-size: 16px;
}

.form-check-label, .form-check-input {
  cursor: pointer;
}

.btn-primary {
  width: 100%;
  padding: 12px;
  font-size: 18px;
  font-weight: bold;
  background-color: #007bff;
  border: none;
  transition: background-color 0.3s ease;
}

.btn-primary:hover {
  background-color: #0056b3;
}
</style>
