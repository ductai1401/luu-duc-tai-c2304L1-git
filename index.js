function tinhGiaTri(x, y, z) {
    const giaTri = 3 * Math.pow(x, 2) - 5 * x * y + Math.pow(z, 4);
    return giaTri;
}
const x = 5;
const y = 1;
const z = 2;
const ketQua = tinhGiaTri(x, y, z);
console.log("Giá trị của biểu thức là: " + ketQua);