(function() {
  window.addEventListener('load', timeQuery);

  function timeQuery() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      if (this.status == 200)
        checkTime(new Date(this.getResponseHeader('Date')));
    };
    xhttp.open('HEAD', window.location.href);
    xhttp.setRequestHeader('Content-Type', 'text/html');
    xhttp.send();
  }

  function checkTime(time) {
    const timeArray = time.toLocaleString('en-US', {timeZone: 'America/New_York', hour12: false}).split(/\D/).map(Number);
    const year = timeArray[2];
    const month = timeArray[0];
    const day = time.getUTCDay();
    const hour = timeArray[4];
    const minute = timeArray[5];
    const second = timeArray[6];
    let R = 0;
    if (year==2024 && month>=1 && month<=4 && day==4) {
      const totalSeconds = hour*3600 + minute*60 + second;
      if (totalSeconds > 16*3600+10*60 && totalSeconds < 17*3600)
        R = 2;
      else if (totalSeconds > 17*3600+10*60 && totalSeconds < 18*3600)
        R = 5;
    }
    if (R) {
      document.getElementById('attendanceFormDiv').className = 'attendance-form-div';
      document.getElementById('replyMessage').setAttribute('value', 'Dear student in multivariable calculus class, thank you for submitting your attendance at the recitation R0' + R.toString() + ' on ' + time.toString() + '. This is confirmation of your attendance. Sincerely, Zirui Xu');
    }
    else
      document.getElementById('attendanceFormDiv').className = 'attendance-form-div wrong-time';
    setTimeout(timeQuery, 10000);
  }
})();