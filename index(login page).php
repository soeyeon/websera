<?php
header("Content-Type: text/html; charset=UTF-8");
session_start();
$conn = new mysqli("localhost","root","","web");
mysqli_query($conn, 'SET NAMES utf8');
$id = $_POST['id'];
$password = $_POST['password'];
$sql = "select *from member where id = '$id' and password = '$password'";
$res = $conn->query($sql);
$row = mysqli_fetch_array($res);
if ($res->num_rows > 0) {
  $_SESSION['id'] = $id;
  $_SESSION['name'] = $row["name"];
  if (isset($_SESSION['id']) && isset($_SESSION['name'])) {
    echo "<script>location.href='index(local page).html';</script>";
  } else {
    echo "<script>alert('로그인 실패!');</script>";
  }
} else {
  echo "<script>alert('로그인 실패!');</script>";
}