console.log(
  "%c" +
    " __      __  ______   __  __   ______     " +
    "\n" +
    "/\\ \\  __/\\ \\ /\\__  _\\ /\\ \\ /\\ \\ /\\__  _\\    " +
    "\n" +
    "\\ \\ \\/\\ \\ \\ \\/_\\/\\ \\/ \\ \\ \\/'/'\\/ _/\\ \\/    " +
    "\n" +
    " \\ \\ \\ \\ \\ \\ \\ \\ \\ \\  \\ \\ , <    \\ \\ \\    " +
    "\n" +
    "  \\ \\ \\_/ \\_\\ \\ \\_\\ \\__\\ \\ \\\\`\\   \\_\\ \\__ " +
    "\n" +
    "   \\ `\\___x___/ /\\_____\\\\ \\_\\ \\_\\ /\\_____\\ " +
    "\n" +
    "    '/__//__/  /_____/ \\/_/\\/_/ /_____/",
  "color: #d81b60; font-size: 16px; font-weight: bold;"
);

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("comment-form");
  const input = document.getElementById("comment-input");
  const commentList = document.getElementById("comment-list");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // 기본 폼 제출 방지

    const commentText = input.value.trim();
    if (commentText === "") {
      alert("댓글을 입력하세요.");
      return;
    }

    // 새로운 댓글 요소 생성
    const commentItem = document.createElement("li");
    commentItem.innerHTML = `
      <div class="comment-item">
        <div class="comment-author">
          <img src="./images/comment-author-icon.png" alt="사용자 프로필 이미지" />
          <span>방문자</span>
        </div>
        <div class="comment-content">${commentText}</div>
      </div>
    `;

    // 댓글 목록에 추가
    commentList.appendChild(commentItem);

    // 입력 필드 초기화
    input.value = "";

    // 알림 표시
    alert("댓글이 등록되었습니다.");
  });
});
