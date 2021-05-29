<?php
header("Content-Type: text/html; charset=UTF-8");
$conn = new mysqli("localhost","root","","web");
mysqli_query($conn, 'SET NAMES utf8');
$id = $_POST['id'];
$hiddenid = $_POST['hiddenid'];
$name = $_POST['name'];
$hiddenname = $_POST['hiddenname'];
$password = $_POST['password1'];
$hiddenpassword = $_POST['hiddenpassword'];
$tel = $_POST['tel'];
$email = $_POST['email'];
if ($hiddenid == 1) {
  $sql = "select *from member where id = '$id'";
  $res = $conn->query($sql);
  if ($res->num_rows > 0) {
    echo "<script>alert('이미 존재하는 아이디입니다.'); location.href='./index(sign-up page).html';</script>";
    exit();
  }
} 

if ($hiddenname == 1) {
  $sql2 = "select *from member where name = '$name'";
  $res2 = $conn->query($sql2);

  if ($res2->num_rows > 0) {
    echo "<script>alert('이미 존재하는 닉네임입니다.'); location.href='./index(sign-up page).html'</script>";
    exit();
  }
} 

if ($hiddenpassword != 1) {
  echo "<script>alert('비밀번호 제출 양식이 올바르지 않습니다.'); location.href='./index(sign-up page).html';</script>";
  exit();
}

$sql3 = "insert into member (id,name,password,tel,email) values ('$id','$name','$password','$tel','$email')";
$res3 = $conn->query($sql3);
$sql4 = "select *from member where id = '$id' and name='$name'";
$res4 = $conn->query($sql4);

if ($res4->num_rows > 0) {
  echo "<script>alert('회원가입을 성공하였습니다.'); location.href='./index(main page).php'</script>";
  exit();
} else {
  echo "<script>alert('회원가입을 성공하지 못하였습니다.'); location.href='./index(sign-up page).html'</script>";
}
