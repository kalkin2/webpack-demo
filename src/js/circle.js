export const area  = function (r){
  return Math.PI*r*r;
};

export const circumference = function (r){
  return 2* Math.PI *r;
};

//한번에 선언도 가능
// export[area,circumference]