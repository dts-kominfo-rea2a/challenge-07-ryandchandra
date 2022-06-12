const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (parameter) => {
  // ambil data
  const ixx = await promiseTheaterIXX();
  const vgc = await promiseTheaterVGC();

  // olah data
  let counter = 0;
  
  // cek emosi dari ixx
  for (let i = 0; i < ixx.length; i++){
    if (ixx[i].hasil === parameter){
      counter++;
    }
  }

  // cek emosi dari vgc
  for (let i = 0; i < vgc.length; i++){
    if (vgc[i].hasil === parameter){
      counter++;
    }
  }

  return counter;
};

module.exports = {
  promiseOutput,
};
