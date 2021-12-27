var btnExitAccount = document.getElementById("exit-account-cps");
var btnExitSiderBar = document.getElementById("exit-account-sider");
var youExitAccount = document.getElementById("alert-cancel-order-account");
var bgOverAccount = document.getElementById("bg-overlay-account");

btnExitAccount.addEventListener("click", (e) => {
  e.preventDefault();
  youExitAccount.style.display = "block";
  bgOverAccount.style.display = "block";
});
btnExitSiderBar.addEventListener("click", (e) => {
  e.preventDefault();
  youExitAccount.style.display = "block";
  bgOverAccount.style.display = "block";
});
var btnExitAccNo = document.getElementById("btn-cancel-account");
var btnAccAccept = document.getElementById("btn-accept-account");
btnExitAccNo.addEventListener("click", (e) => {
  e.preventDefault();
  youExitAccount.style.display = "none";
  bgOverAccount.style.display = "none";
});
btnAccAccept.addEventListener("click", (e) => {
  e.preventDefault();
  window.location.href = "index.html";
  sessionStorage.setItem("icAccount", "none");
  sessionStorage.setItem("linkSignIn", "block");
});

SmallImg[0].onclick = function () {
  ProductImg.src = SmallImg[0].src;
};
SmallImg[1].onclick = function () {
  ProductImg.src = SmallImg[1].src;
};
SmallImg[2].onclick = function () {
  ProductImg.src = SmallImg[2].src;
};
SmallImg[3].onclick = function () {
  ProductImg.src = SmallImg[3].src;
};
SmallImg[4].onclick = function () {
  ProductImg.src = SmallImg[4].src;
};
