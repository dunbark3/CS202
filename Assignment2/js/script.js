const suga = document.getElementById('suga');
const text = document.getElementById('enterText');
const columns = document.getElementsByClassName('column');
const columnsTwo = document.getElementsByClassName('columnTwo');
const white = document.getElementById('white');
const black = document.getElementById('black');
const body = document.body;


document.addEventListener('keydown', function(event) {
  if (event.key === 'Enter' && suga.style.display != 'none') {
    suga.style.transition = 'opacity 0.5s';
    suga.style.opacity = 0;
    text.style.transition = 'opacity 0.5s';
    text.style.opacity = 0;
    black.style.display = 'block';
    white.style.display= 'block';
    black.style.opacity = 0;
    black.style.transition = 'opacity 0.5s'
    white.style.opacity = 0;
    white.style.opacity = 'opacity 0.5s'
        
    setTimeout(function() {
      suga.style.display = 'none';
      text.style.display = 'none';
          
      for (let i = 0; i < columns.length; i++) {
        columns[i].style.display = 'flex';
        columns[i].style.flexDirection = 'row';
        columns[i].style.opacity = 0;
        columns[i].style.transition = 'opacity 0.5s';
        columnsTwo[i].style.opacity = 0;
        columnsTwo[i].style.transition = 'opacity 0.5s'
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
  }, 500);
}