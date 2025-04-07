# 🤠 findPairSum

Esta función en TypeScript encuentra el **primer par de números enteros** dentro de un array que suman un valor objetivo. Está diseñada bajo principios SOLID, especialmente **Single Responsibility Principle (SRP)**, y está completamente testeada con Jest.

Este ejercicio forma parte del reto técnico proporcionado por **PreAuth**:  
👉 [Descripción del reto en GitHub](https://github.com/preauth-io/challenge/tree/main/game-01)

---

## 📆 Tecnologías utilizadas

- **TypeScript**: para tipado fuerte y escalabilidad.
- **Jest + ts-jest**: para pruebas unitarias con soporte para TypeScript.
- **Node.js** y **npm** como entorno de ejecución y gestión de dependencias.

---

## 📌 Requisitos

- Node.js ≥ 14
- npm

---

## 🚀 Instalación y ejecución

```bash
git clone https://github.com/pieromental/preauth_test.git
cd preauth_test/game-01
npm install

npm test           # Ejecuta todos los tests
npm run build      # Compila el proyecto a JavaScript en la carpeta /dist
npm run coverage   # Genera el reporte de cobertura
```

---

## ✅ Validaciones implementadas

La función principal solo se ejecuta si se cumplen estas validaciones:

- El array debe tener al menos 2 elementos
- Todos los elementos deben ser **enteros**
- El valor objetivo (`target`) debe ser un número entero
- Retorna `null` si no encuentra un par válido que cumpla la condición

---

## 🤔 Principios aplicados

- **Single Responsibility Principle (SRP)**: el proyecto está dividido en módulos independientes:
  - `main.ts`: función orquestadora
  - `helpers/isValidInput.ts`: validación de inputs
  - `logic/findFirstPair.ts`: lógica pura del algoritmo

---

## 🗃️ Estructura de carpetas

```
.
├── src/
│   ├── helpers/
│   │   └── isValidInput.ts         # Validaciones
│   ├── logic/
│   │   └── findFirstPair.ts        # Lógica pura de búsqueda
│   └── main.ts                     # Coordinador principal
├── tests/
│   ├── helpers/
│   │   └── isValidInput.test.ts    # Pruebas para validaciones
│   ├── logic/
│   │   └── findFirstPair.test.ts   # Pruebas para la lógica principal
│   └── main.test.ts                # Pruebas de integración
├── dist/                           # Código compilado (tras build)
├── jest.config.js
├── tsconfig.json
└── README.md
```

---

## 📊 Reporte de cobertura

Al ejecutar `npm run coverage`, se generará un reporte visual en:  
📂 `coverage/lcov-report/index.html`

Este informe muestra qué tan cubierto está el código por los tests unitarios.

---

## 👨‍💻 Autor

**Piero Álvaro Salazar Calle**  
GitHub: [@Pieromental](https://github.com/Pieromental)

