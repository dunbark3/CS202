const suga = document.getElementById('suga');
const text = document.getElementById('enterText');
const columns = document.getElementsByClassName('column');
const columnsTwo = document.getElementsByClassName('columnTwo');
const white = document.getElementById('white');
const black = document.getElementById('black');
const body = document.body;
const gojo = document.getElementById('gojo');
const geto = document.getElementById('geto');
const popOne = document.getElementById('popUpLight');
const popTwo = document.getElementById('popUpDark');
const gojoLineOne = document.getElementById('gojoOne');
const gojoLineTwo = document.getElementById('gojoTwo');
let count = 0;
const getoLineOne = document.getElementById('getoOne');
const getoLineTwo = document.getElementById('getoTwo');
const pianoSound = document.getElementById('piano');


document.addEventListener('keydown', function(event) {
  if (event.key === 'Enter' && suga.style.display != 'none') {
    suga.style.opacity = 0;
    text.style.opacity = 0;
    black.style.display = 'block';
    white.style.display= 'block';
    black.style.opacity = 0;
    white.style.opacity = 0;
        
    setTimeout(() => {
      suga.style.display = 'none';
      text.style.display = 'none';
          
      for (let i = 0; i < columns.length; i++) {
        columns[i].style.display = 'flex';
        columns[i].style.flexDirection = 'row';
        columns[i].style.opacity = 0;
        columnsTwo[i].style.opacity = 0;
      }

      setTimeout(() => {
        for (let i = 0; i < columns.length; i++) {
          columns[i].style.opacity = 1;
        }
        black.style.opacity = 1;
        white.style.opacity = 1;
      }, 100);
    }, 500);
  }
});

function goToBlack() {
  for (let i = 0; i < columns.length; i++) {
    columns[i].style.opacity = 0;
  }
  setTimeout(function() {
    for (let i = 0; i < columnsTwo.length; i++) {
      columns[i].style.display = 'none';
      columnsTwo[i].style.display = 'flex';
      columnsTwo[i].style.flexDirection = 'row';
    }

    setTimeout(() => {
      for (let i = 0; i < columnsTwo.length; i++) {
        columnsTwo[i].style.opacity = 1;
      }
    }, 100);
    body.style.backgroundColor = 'black';
  }, 500);
}

function goToWhite() {
  for (let i = 0; i < columns.length; i++) {
    columnsTwo[i].style.opacity = 0;
  }
  setTimeout(function() {
    for (let i = 0; i < columns.length; i++) {
      columnsTwo[i].style.display = 'none';
      columns[i].style.display = 'flex';
    }

    setTimeout(() => {
      for (let i = 0; i < columns.length; i++) {
        columns[i].style.opacity = 1;
      }
    }, 100);
    body.style.backgroundColor = 'white';
  }, 500);
}

function popLight() {
  count = 0;
  for (let i = 0; i < columns.length; i++) {
    columns[i].style.opacity = 0;
  }
  white.style.opacity = 0;
  black.style.opacity = 0;
  popOne.style.opacity = 0;
  gojo.style.opacity = 0;
  gojoLineOne.style.opacity = 0;
  gojoLineTwo.style.opacity = 0;

  setTimeout(function() {
    for (let i = 0; i < columnsTwo.length; i++) {
      columns[i].style.display = 'none';
    }

    popOne.style.display = 'flex';
    popOne.style.flexDirection = 'column';
    gojo.style.display = 'flex';
    gojoLineOne.style.display = 'block';
    gojoLineTwo.style.display =' block';
  
    setTimeout(() => {
      popOne.style.opacity = 1;
      gojo.style.opacity = 1;
      pianoSound.play();
    }, 100);

    document.addEventListener('keydown', function textEvent(event) {
      if (event.key === 'Enter' && count == 0) {
        gojoLineOne.style.opacity = 1;
        count++;
      } else if (event.key === 'Enter' && count == 1) {
        gojoLineTwo.style.opacity = 1;
        count++;
      } else {
        gojoLineOne.style.opacity = 0;
        gojoLineTwo.style.opacity = 0;
        gojo.style.opacity = 0;

        setTimeout(function() {
          gojoLineOne.style.display = 'none';
          gojoLineTwo.style.display = 'none';
          gojo.style.display = 'none';
          popOne.style.display = 'none';
          for (let i = 0; i < columnsTwo.length; i++) {
            columns[i].style.display = 'flex';
          }
      
          setTimeout(() => {
            for (let i = 0; i < columns.length; i++) {
              columns[i].style.opacity = 1;
            }
            black.style.opacity = 1;
            white.style.opacity = 1;
            count = 0;
            document.removeEventListener('keydown', textEvent);
          }, 300);
        }, 500);
      }
    });
  }, 500);
}

function popDark() {
  count = 0;
  for (let i = 0; i < columns.length; i++) {
    columnsTwo[i].style.opacity = 0;
  }
  white.style.opacity = 0;
  black.style.opacity = 0;
  popTwo.style.opacity = 0;
  geto.style.opacity = 0;
  getoLineOne.style.opacity = 0;
  getoLineTwo.style.opacity = 0;

  setTimeout(function() {
    for (let i = 0; i < columnsTwo.length; i++) {
      columnsTwo[i].style.display = 'none';
    }

    popTwo.style.display = 'flex';
    popTwo.style.flexDirection = 'column';
    geto.style.display = 'flex';
    getoLineOne.style.display = 'block';
    getoLineTwo.style.display =' block';
  
    setTimeout(() => {
      popTwo.style.opacity = 1;
      geto.style.opacity = 1;
      pianoSound.play();
    }, 100);

    document.addEventListener('keydown', function textEvent(event) {
      if (event.key === 'Enter' && count == 0) {
        getoLineOne.style.opacity = 1;
        count++;
      } else if (event.key === 'Enter' && count == 1) {
        getoLineTwo.style.opacity = 1;
        count++;
      } else {
        getoLineOne.style.opacity = 0;
        getoLineTwo.style.opacity = 0;
        geto.style.opacity = 0;

        setTimeout(function() {
          getoLineOne.style.display = 'none';
          getoLineTwo.style.display = 'none';
          geto.style.display = 'none';
          popTwo.style.display = 'none';
          for (let i = 0; i < columnsTwo.length; i++) {
            columnsTwo[i].style.display = 'flex';
          }
      
          setTimeout(() => {
            for (let i = 0; i < columns.length; i++) {
              columnsTwo[i].style.opacity = 1;
            }
            black.style.opacity = 1;
            white.style.opacity = 1;
            count = 0;
            document.removeEventListener('keydown', textEvent);
          }, 300);
        }, 500);
      }
    });
  }, 500);
}