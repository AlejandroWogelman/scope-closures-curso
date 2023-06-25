/* console.log(nameOfDog);

var nameOfDog = "Elmo";
console.log(nameOfDog);
 */
nameOfDog("elmo");
function nameOfDog(name) {
  console.log(`El mejor perro es ${name}`);
}
var elmo = "Elmito";

var status = "😎";

setTimeout(() => {
  const status = "😍";

  const data = {
    status: "🥑",
    getStatus() {
      return this.status;
    },
  };
  console.log(data.getStatus());
}, 0);
