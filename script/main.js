let theButtons = document.querySelectorAll("#buttonHolder img"),
theHeading = document.querySelector("#headLine h1"),
puzzleBoard = document.querySelector(".puzzle-board"),
puzzlePieces = document.querySelectorAll(".puzzle-pieces img"),
dropZones = document.querySelectorAll('.drop-zone'),
draggedPiece;

function changeBGImage() {
	puzzleBoard.style.backgroundImage =  `url(images/backGround${this.id}.jpg)`;
}

function handleStartDrag() {
	draggedPiece = this;
}

function handleDragOver(e) {
	e.preventDefault();
}

function handleDrop(e) {
	e.preventDefault();
		if (this.children.length === 0) {
		this.appendChild(draggedPiece);
		} else {
		console.log('Drop zone is not empty');
		}
}

theButtons.forEach(button => button.addEventListener("click", changeBGImage));

puzzlePieces.forEach(piece => piece.addEventListener("dragstart", handleStartDrag));

dropZones.forEach(zone => zone.addEventListener("dragover", handleDragOver));

dropZones.forEach(zone => zone.addEventListener("drop", handleDrop));