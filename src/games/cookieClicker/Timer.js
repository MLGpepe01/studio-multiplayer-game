export default function timer;

function timer(Time_Declared) {
  var timeleft = Time_declared * 60;
  var downloadTimer = setInterval(function() {
    document.getElementById("progressBar").value = 11 - timeleft;
    timeleft -= 1;
    if (timeleft <= 0) {
      clearInterval(downloadTimer);
    }
    $("#timer").html(timeleft);

    if (timeleft === 0) {
      location.reload(false);
    }
  }, 1000);
}
timer(5);

