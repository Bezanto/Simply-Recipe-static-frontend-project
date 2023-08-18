// // function navhider(){
// // if (window.innerWidth >= 800) {
// //     document.getElementById("nav2").style.display = "none";
// // }}
// // navhider();
// // window.addEventListener('resize', navhider);


// // var flag = false;

// // function nav_button() {
// //     if (flag == false) {
// //         flag = true;
// //         document.getElementById("nav2").style.display = "block";
// //     }
// //     else if (flag) {
// //         flag = false;
// //         document.getElementById("nav2").style.display = "none";
// //     }
// // }


const btn = document.getElementById("burgerbtn");
const nav = document.getElementById("nav2");

function nav_button(){
    btn.classList.toggle("active");
    nav.classList.toggle("active");
}