// function data() {


// fetch('/data.json')
//   .then(response => response.json())
//   .then(data => console.log(data.is_free_email.text));


// }



// async function getData() {
//     let url = './data.json';
//     // let url = 'data.json';
//     try {
//         let res = await fetch(url);
//         // console.log(res)
//         return await res.json();
//     } catch (error) {
//         console.log(error);
//     }
// }



async function getData(data) {

    // const bodyContent = "{\"email\":\"embry.ga@gmail.com\"}"
  //  const body = JSON.stringify("{\"email\":\"embry.ga@gmail.com\"}");

    let res = await fetch("http://localhost:3000/mailping", {
        "method": "POST",
        "headers": {
          "Content-Type": "application/json"
        },
        "body": "{\"email\":\""+data+"\"}"
      })
      return await res.json()
    }







// renders data into html list
async function render(data) {
// class="text-secondary"

// const deliverability = data
//  console.log(data)


    let htmlSegment = 
    
    `



    <!-- score -->

<div class="row justify-content-md-center">
  <div class="col-sm-3">
    <div class="shadow-sm p-3 mb-5 bg-white rounded">

<div class="row justify-content-md-center">
<h1 class="text-dark"><b><b>✉️ SCORE: </b></b></h1><h1 class="text-success"><b><b> ${data.quality_score}</b></b></h1>
</div>

</div>
</div>
</div>

  

<div class="row justify-content-md-center">
  <div class="col-sm-5">
    <div class="shadow-sm p-3 mb-5 bg-white rounded">
<ul class="list-group">
  <li class="list-group-item"><b>📬​ Deliverability - </b> <b><b>${data.deliverability}</b></b></li>
  <li class="list-group-item"><b>📬​ Quality Score - </b> <b><b>${data.quality_score}</b></b></li>
  <li class="list-group-item"><b>📬​ Valid Format - </b> <b><b>${data.is_valid_format.text}</b></b></li>
  <li class="list-group-item"><b>📬​ Free Email - </b> <b><b>${data.is_free_email.text}</b></b></li>
  <li class="list-group-item"><b>📬​ Disposable Email - </b> <b><b>${data.is_disposable_email.text}</b></b></li>
    <li class="list-group-item"><b>📬​ Role Email - </b> <b><b>${data.is_role_email.text}</b></b></li>
  <li class="list-group-item"><b>📬​ MX Records - </b> <b><b>${data.is_mx_found.text}</b></b></li>
  <li class="list-group-item"><b>📬​ SMTP Records - </b> <b><b>${data.is_smtp_valid.text}</b></b></li>

</ul>
</div>
</div>
</div>


    `

    try {

    let container = document.querySelector('#grey1');
    container.innerHTML = htmlSegment;

    } catch (er) {
      console.log(er)
    }




}