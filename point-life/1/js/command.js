const inputElement = document.getElementById('command-input');

inputElement.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    // ここにEnterキーが押されたときの処理を記述

    const command = inputElement.value;

    switch(command)
    {
        case "sur mac":
            window.open("https://monitor.macromill.com/", '_blank');
        break;
        default:
            //window.open("https://monitor.macromill.com/", '_blank');
        break;
    }
  }
});