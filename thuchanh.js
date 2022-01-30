let sotienvay;
let laisuat;
let sonam;
sotienvay=prompt('Nhập vào số tiền vay:');
laisuat=prompt('Nhập vào lãi suất:');
sonam=prompt('Nhập vào số năm:');
sotienvay= parseInt(sotienvay);
laisuat= parseInt(laisuat);
sonam= parseInt(sonam);

document.write("Số tiền vay là: "+sotienvay);
document.write("<br>");

document.write("Lãi suất là: "+laisuat);
document.write("<br>");

document.write("Số năm gửi tiền là: "+sonam);
document.write("<br>");

let tienlai = sotienvay+sonam*laisuat;
document.write("Số tiền lãi là:" + tienlai + " triệu đồng");
