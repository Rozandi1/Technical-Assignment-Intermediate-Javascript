function validateLoginData(email, password) {
  const emailValidation = new RegExp("^[a-zA-Z0-9]+(\\.)?[a-zA-Z0-9]+@(mail|gmail|yahoo).(com|id|co.id)$");
  const passValidation = new RegExp("^(?=.[a-z])(?=.[A-Z])(?=.[0-9])(?=.[!@#$%^&*])(?=.{8,})");
  if (emailValidation.test(email)) {
    return "tolong masukan email yang valid";
  } else if (passValidation.test(password)) {
    return "tolong masukan password sesuai ketentuan";
  } else {
    return "welcome to the jungle";
  }
}
export default validateLoginData;
