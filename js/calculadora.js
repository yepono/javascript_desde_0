const display = document.getElementById("display");
const numberButtons = document.querySelectorAll(".btn-num");
const operatorButtons = document.querySelectorAll(".btn-op");
const functionButtons = document.querySelectorAll(".btn-func");
const equalsButton = document.getElementById("equals");

let currentInput = '0';

// Actualiza la pantalla de la calculadora
function updateDisplay() {
    display.textContent = currentInput;
}

// Agrega un número a la entrada actual para formar un número completo
function appendNumber(number) {
    if (currentInput === '0' && number !== '.') {
        currentInput = number;
        return;
    }

    const parts = currentInput.split(/([+\-*/%])/); // Divide la entrada en partes usando los operadores como delimitadores
    const lastPart = parts[parts.length - 1]; // Obtiene la última parte de la entrada
    
    // Verifica si la última parte ya contiene un punto decimal
    if (number === '.' && lastPart.includes('.')) return; // No permite agregar otro punto decimal

    currentInput += number; // Agrega el número a la entrada actual
}

// Agrega un operador a la entrada actual
function appendOperator(operator) {
    const lastChar = currentInput.slice(-1); // Obtiene el último carácter de la entrada actual
    if ('+-*/%'.includes(lastChar)) {
        currentInput = currentInput.slice(0, -1) + operator; // Reemplaza el último operador con el nuevo
    } else {
        currentInput += operator; // Agrega el operador a la entrada actual
    }
}

// Eliminar todo el contenido de la pantalla
function clearAll() {
    currentInput = '0';
}

// Eliminar el último carácter de la entrada actual
function deleteLast() {
    if (currentInput.length === 1) {
        currentInput = '0'; // Si solo queda un carácter, reinicia a '0'
    } else {
        currentInput = currentInput.slice(0, -1); // Elimina el último carácter
    }
}

// Evaluar la expresión matemática en la entrada actual
function calculateResult() {
    try { // try es "intentar" ejecutar el código dentro de su bloque. Si ocurre un error, el control se transfiere al bloque catch.
        const result = eval(currentInput); // eval evalúa la expresión matemática en currentInput
        currentInput = result.toString(); // Actualiza la entrada con el resultado
    } catch (error) { // cacha o atrapa el error y lo transforma o maneja de alguna manera
        currentInput = 'Sin definir'; // Muestra "Error" si la evaluación falla
    }
}

// Agrega event listeners a los botones numéricos 
// ( event listeners quiere decir el que escuche el evento)
numberButtons.forEach(button => {
    button.className = 'btn-num bg-slate-100 hover:bg-slate-200 text-slate-900 rounded-2xl h-16 text-2xl font-semibold shadow-md transition active:scale-95';
    button.addEventListener('click', () => {
        if (currentInput === 'Sin definir') currentInput = '0'; // Reinicia la entrada si actualmente muestra "Error"
        appendNumber(button.textContent); // Agrega el número del botón a la entrada actual
        updateDisplay(); // Actualiza la pantalla de la calculadora
    });
})

// Agrega event listeners a los botones de operadores
operatorButtons.forEach(button => {
    button.className += ' rounded-2xl h-16 text-2xl font-semibold shadow-md transition active:scale-95';
    button.addEventListener('click', () => {
        if (currentInput === 'Sin definir') return; // Reinicia la entrada si actualmente muestra "Error"
        appendOperator(button.textContent); // Agrega el operador del botón a la entrada actual
        updateDisplay(); // Actualiza la pantalla de la calculadora
    });
});

// Agrega event listeners a los botones de operaciones especiales (clear, delete y %)
functionButtons.forEach(button => {
    button.className += ' rounded-2xl h-16 text-xl font-semibold shadow-md transition active:scale-95';
    button.addEventListener('click', () => {
        const action = button.textContent;
        if (action === 'AC') {
            clearAll(); // Limpia la entrada actual
        } else if (action === 'DEL') {
            deleteLast(); // Elimina el último carácter de la entrada actual
        } else if (action === '%') {
            appendOperator('%'); // Agrega el operador de porcentaje a la entrada actual
        }
        updateDisplay(); // Actualiza la pantalla de la calculadora
    });
});

// Agrega event listener al botón de igual para calcular el resultado
equalsButton.addEventListener('click', () => {
    calculateResult(); // Calcula el resultado de la expresión actual
    updateDisplay(); // Actualiza la pantalla de la calculadora con el resultado
});

document.addEventListener('keydown', (event) => {
    const key = event.key;

    if (!isNaN(key || key ==='.' )) {
        if (currentInput === 'Sin definir') currentInput = '0'; // Reinicia la entrada si actualmente muestra "Error"
        appendNumber(key);
    } else if ('+-*/%'.includes(key)) {
        if (currentInput === 'Sin definir') return; // Reinicia la entrada si actualmente muestra "Error"
        appendOperator(key);
    } else if (key === 'Enter') {
        calculateResult();
    } else if (key === 'Backspace') {
        deleteLast();
    } else if (key.toLowerCase() === 'c') {
        clearAll();
    }
    updateDisplay();
});