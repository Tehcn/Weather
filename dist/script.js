import Swal from 'sweetalert2';
const ipAPI = '//api.ipify.org?format=json';
Swal.fire({
    title: 'Can we fetch your IP address?',
    text: "Your IP will NOT be stored",
    icon: 'info',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Go Ahead!',
    cancelButtonText: 'No thanks!'
}).then((result) => {
    if (result.isConfirmed) {
        Swal.fire({
            title: "Thanks!",
            icon: "success"
        }).then(() => {
            getIP();
        });
    }
    else if (!result.isConfirmed) {
        Swal.fire({
            title: "Okay!",
            text: "You can always change your mind later!",
            icon: "info"
        }).then(() => {
            window.location.replace("./noip.html");
        });
    }
});
function getIP() {
    return fetch(ipAPI)
        .then(response => response.json())
        .then(data => data.ip);
}
function getWeather() {
}
