var val = document.querySelector("#html").value;
var style = document.querySelector("#css").value;
var script = document.querySelector("#js").value;
var data = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
   <style type="stylesheet"> ${style} </style>
  </head>  
  <body> ${val}
  <script> ${script} </script> 
  </body>
  </html>
  `;

document.querySelector(".codes").addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    val = document.querySelector("#html").value;
    style = document.querySelector("#css").value;
    script = document.querySelector("#js").value;
    console.log("enter key pressed");
    document.getElementById("iframe_id").srcdoc = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
   <style> ${style} </style>
  </head>  
  <body> ${val}
  <script> ${script} </script> 
  </body>
  </html>
  `;
  }
});
