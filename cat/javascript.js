const img = document.querySelector(".img");

//累計次數
body.addEventListener("mousedown", function () {
  const body = document.querySelector("#body");
  const countbox = body.children[1];
  let count = Number(countbox.innerText);
  count += 1;
  countbox.innerText = count;

  //播放聲音
  new Audio(
    "https://www.myinstants.com/media/sounds/pop-cat-original-meme_3ObdYkj.mp3"
  ).play();

  //切換圖片
  img.src = "https://popcat.click/img/op.353767c3.png";
});

//另設監聽器，滑鼠放開時才閉嘴
body.addEventListener("mouseup", function () {
  img.src = "https://popcat.click/img/p.1e9d00be.png";
});
