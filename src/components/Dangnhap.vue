<template>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
<!-- Form Đăng nhập -->
<div class="mt-3">
                <!-- Nội dung Form Đăng nhập từ bài 2 -->
                <div class="col-md-6">
                        <h2>Đăng nhập</h2>
                        <form class="was-validated">
                            <div class="mb-3">
                            <label for="login-email" class="form-label">Email:</label>
                            <input type="email" class="form-control" id="login-email" placeholder="Nhập email" required>
                            <div class="invalid-feedback">Vui lòng nhập email hợp lệ</div>
                            </div>
                            <div class="mb-3">
                            <label for="login-password" class="form-label">Mật khẩu:</label>
                            <input type="password" class="form-control" id="login-password" placeholder="Nhập mật khẩu" required>
                            <div class="invalid-feedback">Vui lòng nhập mật khẩu</div>
                            </div>
                            <button type="submit" class="btn btn-primary">Đăng nhập</button>
                        </form>
                        </div>
                    </div>

</template>
<script>
    export default {
        name:'DangnhapPage'
    };
</script>

<style scoped>
/* Form đăng nhập */
.mt-3 {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f8f9fa;
}

.col-md-6 {
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

h2 {
  font-size: 24px;
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;
}

.form-label {
  font-weight: 500;
  color: #495057;
}

.form-control {
  padding-left: 40px;
  position: relative;
}

.form-control:focus {
  border-color: #007bff;
  box-shadow: 0 0 5px rgba(0, 123, 255, 0.25);
}

.input-group {
  position: relative;
}

.input-group .input-icon {
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  color: #6c757d;
}

.btn-primary {
  width: 100%;
  font-size: 16px;
  padding: 10px;
  transition: background-color 0.3s ease;
}

.btn-primary:hover {
  background-color: #0056b3;
}
</style>
