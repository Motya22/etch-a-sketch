const grid = document.querySelector('.grid');
const changeBtn = document.querySelector('#change');

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1) + min);
}

function makeGrid(rows = 16, columns = 16) {
  for (let i = 0; i < rows * columns; i++) {
    const cell = document.createElement('div');

    cell.classList.add('grid__item');
    cell.style.flex = `0 0 ${100 / rows}%`;

    let alphaPersent = 0;

    cell.addEventListener('mouseenter', function () {
      const redNumberRgb = getRandomIntInclusive(0, 255);
      const greenNumberRgb = getRandomIntInclusive(0, 255);
      const blueNumberRgb = getRandomIntInclusive(0, 255);

      if (alphaPersent < 100) alphaPersent += 10;

      this.style.backgroundColor = `rgba(${redNumberRgb}, ${greenNumberRgb}, ${blueNumberRgb}, ${
        alphaPersent / 100
      })`;
    });
    cell.addEventListener('mouseleave', function () {
      this.style.backgroundColor = 'transparent';
    });

    grid.appendChild(cell);
  }
}

function changeDimensions() {
  let dimensions = +prompt(
    'How many squares do you want per side (max 100)?',
    16
  );
  console.log(dimensions);

  if (dimensions !== 0 && !window.isNaN(dimensions)) {
    grid.innerHTML = '';

    makeGrid(dimensions, dimensions);
  } else {
    do {
      dimensions = +prompt('Please choose a number of squares below 100:', 16);
    } while (dimensions === 0 || window.isNaN(dimensions));

    grid.innerHTML = '';

    makeGrid(dimensions, dimensions);
  }
}

changeBtn.addEventListener('click', changeDimensions);

makeGrid();
