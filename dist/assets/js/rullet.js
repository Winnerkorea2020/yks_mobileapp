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

eval("var rolLength = 5; // 해당 룰렛 콘텐츠 갯수\r\nvar setNum; // 랜덤숫자 담을 변수\r\nvar hiddenInput = document.createElement(\"input\");\r\nhiddenInput.className = \"hidden-input\";\r\n\r\n//랜덤숫자부여\r\nconst rRandom = () => {\r\n  var min = Math.ceil(0);\r\n  var max = Math.floor(rolLength - 1);\r\n  return Math.floor(Math.random() * (max - min)) + min;\r\n};\r\n\r\nconst rRotate = () => {\r\n  var panel = document.querySelector(\".rouletter-wacu\");\r\n  var btn = document.querySelector(\".rouletter-btn\");\r\n  var deg = [];\r\n  // 룰렛 각도 설정(rolLength = 6)\r\n  for (var i = 1, len = rolLength; i <= len; i++) {\r\n    deg.push((360 / len) * i);\r\n  }\r\n\r\n  // 랜덤 생성된 숫자를 히든 인풋에 넣기\r\n  var num = 0;\r\n  document.body.append(hiddenInput);\r\n  setNum = hiddenInput.value = rRandom();\r\n\r\n  // 애니설정\r\n  var ani = setInterval(() => {\r\n    num++;\r\n    panel.style.transform = \"rotate(\" + 360 * num + \"deg)\";\r\n    btn.disabled = true; //button,input\r\n    btn.style.pointerEvents = \"none\"; //a 태그\r\n\r\n    // 총 50에 다달했을때, 즉 마지막 바퀴를 돌고나서\r\n    if (num === 50) {\r\n      clearInterval(ani);\r\n      panel.style.transform = `rotate(${deg[setNum]}deg)`;\r\n    }\r\n  }, 50);\r\n};\r\n\r\n// 정해진 alert띄우기, custom modal등\r\nconst rLayerPopup = (num) => {\r\n  switch (num) {\r\n    case 1:\r\n      alert(\"당첨!! 스타벅스 아메리카노\");\r\n      break;\r\n    case 3:\r\n      alert(\"당첨!! 햄버거 세트 교환권\");\r\n      break;\r\n    case 5:\r\n      alert(\"당첨!! CU 3,000원 상품권\");\r\n      break;\r\n    default:\r\n      alert(\"꽝! 다음기회에\");\r\n  }\r\n};\r\n\r\n// reset\r\nconst rReset = (ele) => {\r\n  setTimeout(() => {\r\n    ele.disabled = false;\r\n    ele.style.pointerEvents = \"auto\";\r\n    rLayerPopup(setNum);\r\n    hiddenInput.remove();\r\n  }, 5500);\r\n};\r\n\r\n// 룰렛 이벤트 클릭 버튼\r\ndocument.addEventListener(\"click\", function (e) {\r\n  var target = e.target;\r\n  if (target.tagName === \"BUTTON\") {\r\n    rRotate();\r\n    rReset(target);\r\n  }\r\n});\r\n\r\n// roulette default\r\ndocument.getElementById(\"app\").innerHTML = `\r\n<div class=\"rouletter\">\r\n    <div class=\"rouletter-bg\">\r\n        <div class=\"rouletter-wacu\"></div>\r\n    </div>\r\n    <div class=\"rouletter-arrow\"></div>\r\n    <button class=\"rouletter-btn\">start</button>\r\n</div>\r\n`;\r\n\n\n//# sourceURL=webpack://edu03/./src/assets/js/rullet.js?");

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