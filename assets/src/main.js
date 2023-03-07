let tb_facts = null;
let macronutrientes = null;

async function GetJSON(url) {
	try {
		const response = await fetch(url);
		const json = await response.json();
		return json;
	} catch (error) {
		console.error('Error al obtener el JSON:', error);
	}
}

function CreateTable(nombre, dataset){
	const tabla = document.createElement('table');
	const cabecera = document.createElement('tr');
	const cabeceraNombre = document.createElement('th');
	const cabeceraCalorias = document.createElement('th');
	const cabeceraProteinas = document.createElement('th');
	const cabeceraGrasas = document.createElement('th');
	const cabeceraCarbohidratos = document.createElement('th');

	cabeceraNombre.textContent = nombre;
	cabeceraCalorias.textContent = 'K. Calorías / 100gr';
	cabeceraProteinas.textContent = 'Proteinas';
	cabeceraGrasas.textContent = 'Grasas';
	cabeceraCarbohidratos.textContent = 'Carbohidratos';

	cabecera.appendChild(cabeceraNombre);
	cabecera.appendChild(cabeceraCalorias);
	cabecera.appendChild(cabeceraProteinas);
	cabecera.appendChild(cabeceraGrasas);
	cabecera.appendChild(cabeceraCarbohidratos);

	tabla.appendChild(cabecera);

	for(const obj of dataset){
		const fila = document.createElement('tr');
		const nombre = document.createElement('td');
		const calorias = document.createElement('td');
		const proteinas = document.createElement('td');
		const grasas = document.createElement('td');
		const carbohidratos = document.createElement('td');

		nombre.textContent = obj.name;
		calorias.textContent = obj.calorias;
		proteinas.textContent = obj.proteinas;
		grasas.textContent = obj.grasas;
		carbohidratos.textContent = obj.carbohidratos;

		fila.appendChild(nombre);
		fila.appendChild(calorias);
		fila.appendChild(proteinas);
		fila.appendChild(grasas);
		fila.appendChild(carbohidratos);

		tabla.appendChild(fila);
	}

	tb_facts.appendChild(tabla);
}

async function main(){
	macronutrientes = await GetJSON("./assets/macronutrientes/macronutrientes.json");
	tb_facts = document.querySelector('.table-macro');


	tb_facts.innerHTML += `<span>Cantidad de proteinas, calorías, grasas y carbohidratos en las carnes</span>`;
	CreateTable('Carnes', macronutrientes.Carnes);
	tb_facts.innerHTML += `<span>Cantidad de proteinas, calorías, grasas y carbohidratos en los huevos</span>`;
	CreateTable('Huevos', macronutrientes.Huevos);
	tb_facts.innerHTML += `<span>Cantidad de proteinas, calorías, grasas y carbohidratos en los pescados</span>`;
	CreateTable('Pescados', macronutrientes.Pescados);
	tb_facts.innerHTML += `<span>Cantidad de proteinas, calorías, grasas y carbohidratos en los pescados envasados</span>`;
	CreateTable('Pescado envasado', macronutrientes.PescadoEnvasado);
	tb_facts.innerHTML += `<span>Cantidad de proteinas, calorías, grasas y carbohidratos en los mariscos</span>`;
	CreateTable('Mariscos', macronutrientes.Mariscos);
	tb_facts.innerHTML += `<span>Cantidad de proteinas, calorías, grasas y carbohidratos en los quesos</span>`;
	CreateTable('Quesos', macronutrientes.Quesos);
	tb_facts.innerHTML += `<span>Cantidad de proteinas, calorías, grasas y carbohidratos en las legumbres</span>`;
	CreateTable('Legumbres', macronutrientes.Legumbres);
	tb_facts.innerHTML += `<span>Cantidad de proteinas, calorías, grasas y carbohidratos en los frutos secos</span>`;
	CreateTable('Frutos secos', macronutrientes.FrutosSecos);
	tb_facts.innerHTML += `<span>Cantidad de proteinas, calorías, grasas y carbohidratos en los chocolates</span>`;
	CreateTable('Chocolate', macronutrientes.Chocolate);
}


document.addEventListener('DOMContentLoaded', main, false);