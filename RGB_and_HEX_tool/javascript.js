//==========基本版開始==========
//調整為十六進位，全大寫，且維持兩位數。此函數兩種版本共用。
function hex(data) {
  const rgbtransfer16 = Number(data).toString(16).toUpperCase();
  if (rgbtransfer16.length < 2) {
    return "0" + rgbtransfer16;
  } else {
    return rgbtransfer16;
  }
}

// 初始變數
const btn = document.querySelector("#btn");
const hexblock = document.querySelector("#block4");

//為按鈕(Convert)設置監聽器，並設定按下後的動作
btn.addEventListener("click", function () {
  const r_line = document.querySelector("#r_line");
  const g_line = document.querySelector("#g_line");
  const b_line = document.querySelector("#b_line");
  const r_input = document.querySelector("#r_input").value;
  const g_input = document.querySelector("#g_input").value;
  const b_input = document.querySelector("#b_input").value;

  //左欄輸入數字後出現顏色
  if (r_input.length > 0 && g_input.length > 0 && b_input.length > 0) {
    r_line.children[1].style.backgroundColor = `rgb(${r_input}, 0, 0)`;
    g_line.children[1].style.backgroundColor = `rgb(0, ${g_input}, 0)`;
    b_line.children[1].style.backgroundColor = `rgb(0, 0, ${b_input})`;
    // console.log(`rgb(${r_input}, ${g_input}, ${b_input})`);

    // console.log("HEX", hex(r_input));
    // console.log("HEX", hex(g_input));
    // console.log("HEX", hex(b_input));

    //右欄顯示 HEX 碼
    const showscreen = document.querySelector("#showscreen");
    showscreen.innerText = hex(r_input) + hex(g_input) + hex(b_input);

    //右欄大格子顯示顏色
    const hugeblock = document.querySelector("#block4");
    hugeblock.style.backgroundColor = `rgb(${r_input},${g_input},${b_input})`;
  }
});

//==========基本版結束==========

//==========挑戰版開始==========
const part2 = document.querySelector("#part2");

//為 slider_r 設置監聽器
part2.addEventListener("input", function () {
  const showscreen_pt2 = document.querySelector("#showscreen_pt2");
  const slider_r_value = document.querySelector("#slider_r").valueAsNumber;
  const slider_g_value = document.querySelector("#slider_g").valueAsNumber;
  const slider_b_value = document.querySelector("#slider_b").valueAsNumber;
  console.log(slider_r_value, slider_g_value, slider_b_value)

  //背景改顏色
  part2.style.backgroundColor = `rgb(${slider_r_value}, ${slider_g_value}, ${slider_b_value})`;
  // showscreen_pt2.style.backgroundColor = "rgb(255, 255, 255)";

  //下方格子改顏色
  showscreen_pt2.style.backgroundColor = `rgb(${slider_r_value}, ${slider_g_value}, ${slider_b_value})`;

  //下方格子顯示 HEX 碼
  showscreen_pt2.innerText =
    "#" + hex(slider_r_value) + hex(slider_g_value) + hex(slider_b_value);
  // console.log(showscreen_pt2);
});
