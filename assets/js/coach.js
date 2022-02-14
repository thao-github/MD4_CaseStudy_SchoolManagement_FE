function logOut() {
    window.sessionStorage.removeItem('TOKEN_KEY');
    window.sessionStorage.removeItem('USER_KEY');
    window.location.href = 'index.html';
}
function getAllStudent() {
    let user = JSON.parse(window.sessionStorage.getItem('USER_KEY'))
    let id = user.classes.id;

    $.ajax({
        type: "GET",
        url: "http://localhost:8080/user/coach/allStudents/" + id,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        success: function (data) {
            window.sessionStorage.setItem("students", JSON.stringify(data))
            window.location.href="coach-students-all.html"
        },
        error: function (err) {
            console.log(err)
        }
    })
}

function getStudentInfo(studentId) {
    let user = JSON.parse(window.sessionStorage.getItem('USER_KEY'))
    let classId = user.classes.id;

    $.ajax({
        type: "GET",
        url: "http://localhost:8080/user/coach/students/" + classId + "/" + studentId,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        success: function (data) {
            window.sessionStorage.setItem("student", JSON.stringify(data))
            window.location.href = "coach-student-detail.html"
        },
        error: function (err) {
            console.log(err)
        }
    })
}

function findByName() {
    let name = document.getElementById("student-search-name").value;
    if (name != null) {
        let user = JSON.parse(window.sessionStorage.getItem('USER_KEY'))
        let id = user.classes.id;
        $.ajax({
            type: "GET",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            url: "http://localhost:8080/user/coach/students/" + id + "/search/" + name,
            success: function (data) {
                window.sessionStorage.setItem("searchResult", JSON.stringify(data))
                window.location.href = "coach-students-search.html"
            },
            error: function (err) {
                console.log(err)
            }
        })
    }
}

function findUserByStatus(status) {
    let user = JSON.parse(window.sessionStorage.getItem('USER_KEY'))
    let id = user.classes.id;

    $.ajax({
        type: "GET",
        url: "http://localhost:8080/user/coach/" + id + "/" + status,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        success: function (data) {
            window.sessionStorage.setItem("statusSearch", JSON.stringify(data))
            window.location.href = "coach-students-status.html"
        },
        error: function (err) {
            console.log(err)
        }
    })
}




