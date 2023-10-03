/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/js/rullet.js":
/*!*********************************!*\
  !*** ./src/assets/js/rullet.js ***!
  \*********************************/
/***/ (() => {

eval("var rolLength = 5; // 해당 룰렛 콘텐츠 갯수\nvar setNum; // 랜덤숫자 담을 변수\nvar hiddenInput = document.createElement(\"input\");\nhiddenInput.className = \"hidden-input\";\n\n//랜덤숫자부여\nconst rRandom = () => {\n  var min = Math.ceil(0);\n  var max = Math.floor(rolLength - 1);\n  return Math.floor(Math.random() * (max - min)) + min;\n};\n\nconst rRotate = () => {\n  var panel = document.querySelector(\".rouletter-wacu\");\n  var btn = document.querySelector(\".rouletter-btn\");\n  var deg = [];\n  // 룰렛 각도 설정(rolLength = 6)\n  for (var i = 1, len = rolLength; i <= len; i++) {\n    deg.push((360 / len) * i);\n  }\n\n  // 랜덤 생성된 숫자를 히든 인풋에 넣기\n  var num = 0;\n  document.body.append(hiddenInput);\n  setNum = hiddenInput.value = rRandom();\n\n  // 애니설정\n  var ani = setInterval(() => {\n    num++;\n    panel.style.transform = \"rotate(\" + 360 * num + \"deg)\";\n    btn.disabled = true; //button,input\n    btn.style.pointerEvents = \"none\"; //a 태그\n\n    // 총 50에 다달했을때, 즉 마지막 바퀴를 돌고나서\n    if (num === 50) {\n      clearInterval(ani);\n      panel.style.transform = `rotate(${deg[setNum]}deg)`;\n    }\n  }, 50);\n};\n\n// 정해진 alert띄우기, custom modal등\nconst rLayerPopup = (num) => {\n  switch (num) {\n    case 1:\n      alert(\"당첨!! 스타벅스 아메리카노\");\n      break;\n    case 3:\n      alert(\"당첨!! 햄버거 세트 교환권\");\n      break;\n    case 5:\n      alert(\"당첨!! CU 3,000원 상품권\");\n      break;\n    default:\n      alert(\"꽝! 다음기회에\");\n  }\n};\n\n// reset\nconst rReset = (ele) => {\n  setTimeout(() => {\n    ele.disabled = false;\n    ele.style.pointerEvents = \"auto\";\n    rLayerPopup(setNum);\n    hiddenInput.remove();\n  }, 5500);\n};\n\n// 룰렛 이벤트 클릭 버튼\ndocument.addEventListener(\"click\", function (e) {\n  var target = e.target;\n  if (target.tagName === \"BUTTON\") {\n    rRotate();\n    rReset(target);\n  }\n});\n\n// roulette default\ndocument.getElementById(\"app\").innerHTML = `\n<div class=\"rouletter\">\n    <div class=\"rouletter-bg\">\n        <div class=\"rouletter-wacu\"></div>\n    </div>\n    <div class=\"rouletter-arrow\"></div>\n    <button class=\"rouletter-btn\">start</button>\n</div>\n`;\n\n\n//# sourceURL=webpack://edu03/./src/assets/js/rullet.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/assets/js/rullet.js"]();
/******/ 	
/******/ })()
;