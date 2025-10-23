document.getElementById("button").addEventListener('click', async()=>{
    const response = await fetch('./expression.txt');
    const text = await response.text();

    const p = document.createElement('p')
    p.textContent = text;
    document.body.appendChild(p);
} );
