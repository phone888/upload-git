const Universe = (name: string, address: number) => {
  return `Name: ${name} Number: ${address}`;
};
const res = Universe("world", 123);
console.log(res);
