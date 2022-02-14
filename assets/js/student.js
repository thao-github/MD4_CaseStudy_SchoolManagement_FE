let user = JSON.parse(window.sessionStorage.getItem("USER_KEY"));
document.getElementById("username").innerText = user.name;
document.getElementById("student-class").innerText = user.classes.name;

function logOut() {
    window.sessionStorage.removeItem('TOKEN_KEY');
    window.sessionStorage.removeItem('USER_KEY');
    window.location.href = 'index.html';
}

function getTuitionHistory(){
    let user = JSON.parse(window.sessionStorage.getItem("USER_KEY"));
    let id = user.id;

    $.ajax({
        type: "GET",
        url: "http://localhost:8080/user/student/tuition/" + id,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        success: function (data) {
            window.sessionStorage.setItem( "tuition", JSON.stringify(data))
            window.location.href = "student-tuition.html"
        },
        error: function (err) {
            console.log(err)
        }
    })
}