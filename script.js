document.addEventListener('DOMContentLoaded', () => {
    const loginBtn = document.getElementById('loginBtn');
    const loginModal = document.getElementById('loginModal');
    const closeBtn = document.querySelector('.close-btn');
    const loginForm = document.getElementById('loginForm');
    const menuLinks = document.querySelectorAll('.menu-link');
    const message = document.getElementById('message');

    // 💡 로그인 버튼 클릭 시 모달창 띄우기
    loginBtn.addEventListener('click', () => {
        loginModal.style.display = 'flex';
        message.textContent = ''; // 메시지 초기화
    });

    // 💡 모달창 닫기
    closeBtn.addEventListener('click', () => {
        loginModal.style.display = 'none';
    });

    // 💡 모달창 바깥 클릭 시 닫기
    window.addEventListener('click', (event) => {
        if (event.target === loginModal) {
            loginModal.style.display = 'none';
        }
    });

    // 💡 로그인 폼 제출 이벤트
    loginForm.addEventListener('submit', (event) => {
        event.preventDefault(); // 페이지 새로고침 방지

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // 💡 아이디와 비밀번호 확인 (예시: 'user' / '1111')
        if (username === 'user' && password === '1111') {
            alert('로그인 성공!');
            loginModal.style.display = 'none';
            // 메뉴 활성화
            menuLinks.forEach(link => {
                link.classList.remove('disabled');
            });
            message.textContent = '';
        } else {
            // 로그인 실패
            message.textContent = '아이디 또는 비밀번호가 잘못되었습니다.';
            document.getElementById('password').value = '';
        }
    });

    // 💡 메뉴 링크 클릭 이벤트 (로그인 여부 확인)
    menuLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            if (link.classList.contains('disabled')) {
                // 비활성화 상태인 경우
                alert('로그인 후 이용 가능합니다.');
                event.preventDefault(); // 링크 이동 방지
            } else {
                // 활성화 상태인 경우, data-page 속성의 값으로 이동
                const targetPage = link.getAttribute('data-page');
                window.location.href = targetPage;
            }
        });
    });

});
