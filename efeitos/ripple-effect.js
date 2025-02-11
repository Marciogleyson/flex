document.querySelectorAll('.ripple').forEach(elemento => {
    elemento.addEventListener('click', function(e)  {
        // remove animaçao anteriores
        this.classList.remove('active');

        //calcula posição do clique
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Define a posição do ripple
        this.style.setProperty('--x', `${x}px`);
        this.style.setProperty('--y', `${y}px`);

        // Ativa animação
        this.classList.add('active');

        // Remo classe após animação
        setTimeout(() => this.classList.remove('active'),600);
    })
})