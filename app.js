const staffList = document.getElementById('staff');

// AXIOS
// axios.get('http://localhost:3000/api/staff/')
//   .then(function (response) {
//     // handle success
//     console.log(response);
//     let data = response.data; // array of objs
//     data.forEach(staff => {
//         let listItem = document.createElement('li');
//         listItem.textContent = staff.firstName + ' ' + staff.lastName; 
//         staffList.appendChild(listItem);
//     });
//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   });

// JQUERY AJAX
// $.ajax({
//   url: 'http://localhost:3000/api/staff/',
//   success: function (response) {
//     console.log(response); 
//     response.forEach(staff => {
//         let listItem = document.createElement('li');
//         listItem.textContent = staff.firstName + ' ' + staff.lastName; 
//         staffList.appendChild(listItem);
//     });               
//   }
// });

// $.get( "http://localhost:3000/api/staff/", function( response ) {
//     response.forEach(staff => {
//         let listItem = document.createElement('li');
//         listItem.textContent = staff.firstName + ' ' + staff.lastName; 
//         staffList.appendChild(listItem);
//     });  
// });


// JAVASCRIPT
// var xhr = new XMLHttpRequest();
// xhr.onload = function () {
//     if (xhr.status >= 200 && xhr.status < 300) {
//         console.log(xhr.response);
//         let response = JSON.parse(xhr.response);
//         response.forEach(staff => {
//             let listItem = document.createElement('li');
//             listItem.textContent = staff.firstName + ' ' + staff.lastName; 
//             staffList.appendChild(listItem);
//         }); 
//     } else {
//         // console.log('The request failed!');
//         staffList.textContent = 'error';
//     }
// };
// xhr.open('GET', 'http://localhost:3000/api/staff/4');
// xhr.send();

// const studentList = document.getElementById('students');

// axios.get('http://localhost:3000/api/student')
//   .then(function (response) {
//     // handle success
//     console.log(response);
//     let data = response.data;
//     data.forEach(student => {
//         let listItem = document.createElement('li');
//         listItem.textContent = student.firstName + ' ' + student.lastName; 
//         studentList.appendChild(listItem);
//     });
//   })
  // .catch(function (error) {
  //   // handle error
  //   console.log(error);
  // })
  // .then(function () {
  //   // always executed
  //   console.log('Here');
  // });