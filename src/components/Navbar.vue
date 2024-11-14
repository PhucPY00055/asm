<template>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
 <!-- Navbar -->
  <div class="container">
 <nav class="navbar navbar-expand-sm navbar-dark" style="background-color: gold;">
        <div class="container">
          <a class="navbar-brand" href="/">
            <img :src="require('../components/images/logo-energy-pilates.png')" style="width: 150px;"/>
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="collapsibleNavbar">
            <ul class="navbar-nav me-auto">
              <li class="nav-item">
                <a class="nav-link" href="/Baiviet"><i class="fa-solid fa-list"></i> Bài viết</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#"><i class="fa-solid fa-film"></i> Video</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#"><i class="fa-solid fa-circle-info"></i> Giới thiệu</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#"><i class="fa-solid fa-calendar-days"></i> Sự kiện</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                  <i class="fa-solid fa-user"></i> Tài khoản
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="/Dangnhap">Đăng nhập</a></li>
                  <li><a class="dropdown-item" href="#">Quên mật khẩu</a></li>
                  <li><a class="dropdown-item" href="/Dangky">Đăng ký thành viên</a></li>
                </ul>
              </li>
            </ul>
            <ul class="navbar-nav d-flex">
              <li class="nav-item">
                <a class="nav-link">Tiếng Việt</a>
              </li>
              <li class="nav-item">
                <a class="nav-link">Tiếng Anh</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
</template>

<script>
export default {
 name: 'NavBar'
}
</script>

<style scoped>
.nav-link{color: black;}
</style>