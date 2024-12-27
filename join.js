document.getElementById('registerForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();
  const confirmPassword = document.getElementById('confirmPassword').value.trim();
  const name = document.getElementById('name').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const gender = document.querySelector('input[name="gender"]:checked').value;
  const email = document.getElementById('email').value.trim();

  // 유효성 검사
  if (username.length < 4) {
    alert('아이디는 4자 이상이어야 합니다.');
    return;
  }
  if (password.length < 8 || password.length >= 30 || !/[A-Za-z]/.test(password) || !/[0-9]/.test(password) || !/[!@#$%^&*]/.test(password)) {
    alert('비밀번호는 영문, 숫자, 특수문자를 포함한 8자 이상 30자 미만이어야 합니다.');
    return;
  }
  if (password !== confirmPassword) {
    alert('비밀번호가 일치하지 않습니다.');
    return;
  }
  if (!name) {
    alert('이름을 입력하세요.');
    return;
  }
  if (!/^\d+$/.test(phone)) {
    alert('전화번호는 숫자만 입력할 수 있습니다.');
    return;
  }
  if (!email) {
    alert('이메일 주소를 입력하세요.');
    return;
  }

  // 회원가입 내용 알림창
  alert(`회원가입 내용:\n아이디: ${username}\n비밀번호: ${'*'.repeat(password.length)}\n이름: ${name}\n전화번호: ${phone}\n성별: ${gender}\n이메일: ${email}`);

  // 유효성 검사를 통과한 후 회원가입 완료 페이지로 리디렉션
  location.href = "success.html";
});

// 다크 모드 설정을 위한 스크립트
const modeSelector = document.getElementById('modeSelector');
modeSelector.addEventListener('change', () => {
    if (modeSelector.value === 'dark') {
        document.querySelector('html').setAttribute('data-bs-theme', 'dark');
    } else {
        document.querySelector('html').setAttribute('data-bs-theme', 'light');
    }
});

// 기본 모드를 라이트 모드로 설정 
document.querySelector('html').setAttribute('data-bs-theme', 'light');