function generateRandomColorRGB() {
  const RGBRed = parseInt(Math.random() * 255, 10);
  const RGBGreen = parseInt(Math.random() * 255, 10);
  const RGBBlue = parseInt(Math.random() * 255, 10);
  const generateRGB = `rgb(${RGBRed}, ${RGBGreen}, ${RGBBlue})`;
  return generateRGB;
}

function createColorPalette() {
  const color = document.querySelectorAll('.color');
  color[0].style.backgroundColor = 'black';
  color[0].classList.add('selected');
  for (let index = 1; index < color.length; index += 1) {
    color[index].style.backgroundColor = generateRandomColorRGB();
  }
}

function colorsPixel(event) {
  const selecionedColor = document.querySelector('.selected').style.backgroundColor;
  const selecionedColorEvent = event.target;
  selecionedColorEvent.style.backgroundColor = selecionedColor;
}

function colorChange() {
  const squareList = document.querySelectorAll('.pixel');
  for (let index = 0; index < squareList.length; index += 1) {
    squareList[index].addEventListener('click', colorsPixel);
  }
}

function deleteTable() {
  const table = document.querySelector('#pixel-board');
  document.body.removeChild(table);
}

function reinsertTable(size) {
  deleteTable();
  const newPixelTable = document.createElement('div');
  newPixelTable.id = 'pixel-board';
  document.body.appendChild(newPixelTable);
  for (let index = 0; index < size; index += 1) {
    const newPixels = document.createElement('div');
    newPixels.classList.add('pixels');
    newPixelTable.appendChild(newPixels);
    for (let counter = 0; counter < size; counter += 1) {
      const newPixel = document.createElement('div');
      newPixel.classList.add('pixel');
      newPixels.appendChild(newPixel);
    }
  }
  colorChange();
}

function selectColorInPalette(event) {
  const selected = document.querySelector('.selected');
  const eventSelectColor = event;
  selected.classList.remove('selected');
  eventSelectColor.target.classList.add('selected');
}

function changeTheColor() {
  const colorsPalette = document.querySelectorAll('.color');
  for (let index = 0; index < colorsPalette.length; index += 1) {
    colorsPalette[index].addEventListener('click', selectColorInPalette);
  }
}

function removeColorFromTable() {
  const pixelList = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixelList.length; index += 1) {
    pixelList[index].style.backgroundColor = 'white';
  }
}

function colorRemovalEvent() {
  const clearButton = document.querySelector('#clear-board');
  clearButton.addEventListener('click', removeColorFromTable);
}

function changesTableSize() {
  const inputDimensionalTable = document.querySelector('#board-size');
  if (inputDimensionalTable.value.length === 0) {
    alert('Board inválido!');
    return;
  }
  let sizeTable = parseInt(inputDimensionalTable.value, 10);
  if (sizeTable <= 5) {
    sizeTable = 5;
  } else if (sizeTable >= 50) {
    sizeTable = 50;
  }
  reinsertTable(sizeTable);
}

function generateDimensionalTable() {
  const buttonVQV = document.getElementById('generate-board');
  buttonVQV.addEventListener('click', changesTableSize);
}

function createFooter() {
  const footer = document.createElement('footer');
  const textFooter = document.createElement('p');
  footer.id = 'baseboard';
  footer.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
  document.body.appendChild(footer);
  textFooter.id = 'footer';
  textFooter.style.color = 'rgb(255, 255, 255)';
  textFooter.textContent = '@Savio Moraes - 2021';
  textFooter.style.marginLeft = 'auto';
  textFooter.style.marginRight = 'auto';
  footer.appendChild(textFooter);
}

window.onload = function reloadBrowser() {
  createColorPalette();
  reinsertTable(5);
  changeTheColor();
  colorRemovalEvent();
  generateDimensionalTable();
  createFooter();
};
