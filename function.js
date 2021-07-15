<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Demo Js</title>
    <!-- <link rel="stylesheet" href="style.css"> -->
    <style>
        button {
  font-family: Arial, Helvetica, sans-serif;
  letter-spacing: 1px;
  text-transform: uppercase;
  text-align: center;
  border: 2px solid rgb(255, 232, 28);
  background-color: antiquewhite;
  padding: 3px 10px;
  display: inline-block;
  cursor: pointer;
}

    </style>
</head>
<body>
    <h1> Demo JS</h1>
    <button>Roll No.1  User </button>

    <script >
        let namasteBtn = document.querySelector('button');
namasteBtn.addEventListener("click", inputMsg);

 function inputMsg() {
        let name = prompt('Enter name of student');
        let rollno = prompt('Enter RollNo. of student');
        namasteBtn.textContent = "Roll no.="+rollno+" & name- "+name;
 }
    </script>
</body>
</html>
