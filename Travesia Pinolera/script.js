// Simulación de datos
const vuelosDisponibles = [
    { aerolinea: 'Avianca', precio: 250, origen: 'Managua', destino: 'Miami', duracion: '2h 30m' },
    { aerolinea: 'Copa Airlines', precio: 310, origen: 'Managua', destino: 'Panamá', duracion: '1h 45m' },
    { aerolinea: 'Aeroméxico', precio: 420, origen: 'Managua', destino: 'México DF', duracion: '3h 10m' }
];

document.addEventListener('DOMContentLoaded', () => {
    const btnBuscar = document.getElementById('btn-buscar');
    const contenedor = document.getElementById('resultados');

    btnBuscar.addEventListener('click', () => {
        const origen = document.getElementById('origen').value;
        const destino = document.getElementById('destino').value;

        if (!origen || !destino) {
            alert("Por favor indica origen y destino");
            return;
        }

        mostrarResultados(vuelosDisponibles);
    });
});

function mostrarResultados(vuelos) {
    const contenedor = document.getElementById('resultados');
    contenedor.innerHTML = '<h2 class="text-2xl font-black mb-6">Vuelos encontrados</h2>';

    vuelos.forEach(vuelo => {
        const card = document.createElement('div');
        card.className = 'vuelo-card';
        card.innerHTML = `
            <div>
                <h3 class="font-bold text-xl">${vuelo.aerolinea}</h3>
                <p class="text-gray-500">${vuelo.origen} <i class="fas fa-arrow-right mx-2"></i> ${vuelo.destino}</p>
                <span class="text-sm">Duración: ${vuelo.duracion}</span>
            </div>
            <div class="text-right">
                <p class="text-3xl font-black">$${vuelo.precio}</p>
                <button class="btn-negro mt-2" onclick="alert('Iniciando proceso de pago...')">RESERVAR</button>
            </div>
        `;
        contenedor.appendChild(card);
    });
}