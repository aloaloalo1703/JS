var btnTongLuong = document.getElementById("btnTongLuong");
btnTongLuong.onclick = function () {
  var soNgay = document.getElementById("soNgay").value;

  var tongLuong = soNgay * 100;

  var result = "Tổng lương là " + tongLuong + "000 VND";

  var pTongLuong = document.getElementById("pTongLuong");

  pTongLuong.innerHTML = result;
};


var btnTinhTrungBinh = document.getElementById("btnTinhTrungBinh");
btnTinhTrungBinh.onclick = function () {
  var number_1 = document.getElementById("number_1").value * 1;
  var number_2 = document.getElementById("number_2").value * 1;
  var number_3 = document.getElementById("number_3").value * 1;
  var number_4 = document.getElementById("number_4").value * 1;
  var number_5 = document.getElementById("number_5").value * 1;

  var result = (number_1 + number_2 + number_3 + number_4 + number_5) / 5;

  var pTinhTrungBinh = document.getElementById("pTinhTrungBinh");
  pTinhTrungBinh.innerHTML = "Tổng trung bình 5 số là " + result;

  pTinhTrungBinh.style.textAlign = "center";
};


var btnUSD = document.getElementById("btnUSD");
btnUSD.onclick = function () {
  var USD = document.getElementById("USD").value * 1;

  var QuyDoiVND = USD * 23.5;

  var pQuyDoi = document.getElementById("pQuyDoi");
  pQuyDoi.innerHTML =
    USD + " Đô của bạn được quy đổi thành " + QuyDoiVND + "000 VND";
};


var btnChuViHCN = document.getElementById("btnChuViHCN");
btnChuViHCN.onclick = function () {
  var chieuDai = document.getElementById("chieuDai").value * 1;
  var chieuRong = document.getElementById("chieuRong").value * 1;

  var result = (chieuDai + chieuRong) * 2;

  var pChuViHCN = document.getElementById("pChuViHCN");
  pChuViHCN.innerHTML = "Chu vi HCN là " + result;
};


var btnDienTichHCN = document.getElementById("btnDienTichHCN");
btnDienTichHCN.onclick = function () {
  var chieuDai = document.getElementById("chieuDai").value * 1;
  var chieuRong = document.getElementById("chieuRong").value * 1;

  var result = chieuDai * chieuRong;

  var pDienTichHCN = document.getElementById("pDienTichHCN");
  pChuViHCN.innerHTML = "Diện tích HCN là " + result;
};


var tongHaiChuSo = document.getElementById("tongHaiChuSo");
tongHaiChuSo.onclick = function () {
  var haiChuSo = document.getElementById("haiChuSo").value * 1;

  const CHUC = Math.floor((haiChuSo % 100) / 10);
  const DV = haiChuSo % 10;

  var tongKySo = CHUC + DV;
  var pTongHaiChuSo = document.getElementById("pTongHaiChuSo");
  pTongHaiChuSo.innerHTML = "Tong 2 chu so la " + tongKySo;
};
