function citation(){

    const elementCitation = document.getElementById('citation');

    const contenue = elementCitation.textContent;

    console.log(contenue);
}

document.getElementById("button").addEventListener('click',citation);