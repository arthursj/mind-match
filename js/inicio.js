function typeLine(lineId, delay, duration) {
    setTimeout(() => {
        const line = document.getElementById(lineId);
        line.classList.add('typing');
        
        // Após a duração da animação, removemos o cursor (border-right)
        setTimeout(() => {
            line.classList.add('done');
        }, duration);  // Duração igual ao tempo da animação
    }, delay);
}

// Sequência de digitação das linhas
typeLine('line1', 0, 3000);        // Primeira linha: duração da animação de 3 segundos
typeLine('line2', 3500, 3000);     // Segunda linha começa 3,5 segundos depois
typeLine('line3', 7000, 3000);     // Terceira linha começa 7 segundos depois
typeLine('line4', 11000, 3000);    // Quarta linha começa 11 segundos depois
typeLine('line5', 15000, 3000);    // Quinta linha começa 15 segundos depois
typeLine('line6', 19000, 3000);    // Sexta linha começa 19 segundos depois
typeLine('line7', 23000, 3000);    // Sétima linha começa 23 segundos depois