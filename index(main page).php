<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/style(main page).css">
    <title>스마트 주차장</title>
</head>
<body>
    <div class="container">
        <nav>
            <a href="index(main page).php">Home</a>
        </nav>
    </div>
    <div id="wrap">
        <h1>스마트 주차장</h1>
    </div>
    <?php header("Content-Type: text/html; charset=UTF-8");
  session_start(); ?>
  <?php if ((!isset($_SESSION['id'])) &&  (!isset($_SESSION['name']))) { ?>
    <div class="btn-area">
        <nav>
            <a href="index(login page).html"><button id="btn" type="submit">로그인 하기</button></a>
            <?php } else { ?>
                <a href="./logout.php"><button id="btn" type="submit">로그아웃</button></a>
                <?php } ?>
        </nav>
    </div>
    <div>
        <a href="index(sign-up page).html"><input type="button" value="회원가입"></a>
    </div>
    <img src="https://postfiles.pstatic.net/MjAyMTAzMzBfMTkz/MDAxNjE3MDMwOTUxOTYx.8p5qHKQ0aerVhRXcE4fJptWlEt0yotc3B9X52wkSk6wg.j-3tMJd8msGw9XgWSWP-L1NS9YNGEIc4Fuq6H4Bz7s0g.JPEG.thdus8800/KakaoTalk_20210330_000408813.jpg?type=w966" class="rounded front start">
    <script src="js/main(main page).js"></script>
</body>
</html>