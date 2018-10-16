
function validator(username) {
  const length = username.length;
  console.log(length);
  const pattern = /^(?=^.{6,16}$)[a-zA-Z0-9]+(-?)[a-zA-Z0-9]+$/;


  return pattern.test(username);
}








module.exports = { validator };