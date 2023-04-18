$(".register").click(function () {
  const email = $("#inputEmail1").val();
  const password = $("#inputPassword1").val();
  const password2 = $("#inputPassword2").val();
  const name = $("#Name1").val();
  const year = $("#Year1").val();
  const month = $("#Month1").val();
  const day = $("#Day1").val();
  const gender = $("#gender").val();
  const number = $("#Number1").val();
  let Like = "";

  //null, undefined,' '(빈문자열), 0 => 무조건 false
  //2. 비밀번호, 이메일 양식 맞지 않으면 알려주기
  if (!email) {
    //이메일에 입력된게 없을때
    alert("이메일을 입력해주세요!");
    return;
  } else {
    //이메일이 입력됏을때
    if (!emailCheck(email)) {
      //이메일 형식에 맞지 않을때
      alert("이메일 형식에 맞지 않습니다");
      return;
    }
  }

  if (!password) {
    alert("비밀번호를 입력해주세요!");
    return;
  } else {
    if (!pwdCheck(password)) {
      //비밀번호 형식에 맞지않을때
      alert(
        "특수문자 / 문자 / 숫자 포함 형태의 8~15자리 이내의 암호를 입력해주세요"
      );
      return;
    }
  }

  if (password2 !== password) {
    alert("비밀번호를 다시 확인해주세요!");
    return;
  }

  if (!name) {
    alert("이름를 입력해주세요!");
    return;
  }

  if (!year) {
    alert("태어난 년도를 입력해주세요!");
    return;
  }

  if (!month) {
    alert("태어난 월을 입력해주세요!");
    return;
  }

  if (!day) {
    alert("태어난 일을 입력해주세요!");
    return;
  }

  if (!gender) {
    alert("성별을 입력해주세요!");
    return;
  }

  if (!number) {
    alert("전화번호를 입력해주세요!");
    return;
  } else {
    if (!telCheck(number)) {
      //비밀번호 형식에 맞지않을때
      alert("전화번호를 확인해주세요!");
      return;
    }
  }

  alert("회원가입이 완료되었습니다");
  location.href = "./register.html";

  // 정규식
  function pwdCheck(pwd) {
    //특수문자 / 문자 / 숫자 포함 형태의 8~15자리 이내의 암호 정규식 ( 3 가지 조합)
    const reg = /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;
    return reg.test(pwd); //맞으면 true, 틀리면 false를 준다
  }

  function emailCheck(email) {
    const reg =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    return reg.test(email); //맞으면 true, 틀리면 false를 준다
  }

  function telCheck(tel) {
    const reg = /^\d{2,3}-\d{3,4}-\d{4}$/;
    return reg.test(tel);
  }
});
