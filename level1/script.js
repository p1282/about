// JavaScript는 이 특정 기능(hover 및 click 링크)을 위해 필수는 아니지만
// 추가적인 동적 효과를 주고 싶을 때 사용합니다.
// 현재 HTML과 CSS만으로도 요청하신 기능은 충분히 구현됩니다.

// 예를 들어, 모든 .timeline-item에 동적으로 클릭 이벤트를 추가하고 싶다면:
document.addEventListener('DOMContentLoaded', () => {
    const timelineItems = document.querySelectorAll('.timeline-item');

    timelineItems.forEach(item => {
        item.addEventListener('click', (event) => {
            // 기본 링크 이동 동작을 막지 않고, 추가적인 작업을 할 수 있습니다.
            // 예: console.log(`'${item.textContent.trim()}' 클릭됨!`);
        });
    });
});
