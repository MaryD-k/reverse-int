module.exports = function reverse (n) {
  let newN;
    if (n<0)
  {
      newN=Math.abs(n);
      n=newN;
  }
  let mas=n.toString().split("");
  let num;
  for (let i=0, j=mas.length - 1; i<Math.trunc(mas.length/2) && j>=Math.ceil(mas.length/2); i++, j--)
  {
      num=mas[i];
      mas[i]=mas[j];
      mas[j]=num;
  }
  num = Number(mas.join("")); 
  return num;
}
