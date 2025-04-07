# 🧠 findPairSum

Esta función en TypeScript encuentra el **primer par de números enteros** dentro de un array que suman un valor objetivo. Está diseñada para ser eficiente y está totalmente testeada con Jest.

Este ejercicio forma parte del reto técnico proporcionado por **PreAuth**, el cual puede encontrarse en el siguiente enlace:  
👉 [Descripción del reto en GitHub](https://github.com/preauth-io/challenge/tree/main/game-01)

---

## 📦 Tecnologías utilizadas

- **TypeScript**: para el tipado estricto y claridad en el desarrollo.
- **Jest + ts-jest**: para pruebas unitarias con soporte nativo para TypeScript.

---

## 📌 Requisitos

- Node.js ≥ 14
- npm

---

## 🚀 Instalación

```bash
git clone https://github.com/pieromental/preauth_test.git
cd game-01
npm install
npm test           # Ejecuta todos los tests
npm run build      # Genera los archivos JavaScript en la carpeta dist/
npm run coverage   # Genera el reporte de cobertura
```

---

## ✅ Validaciones implementadas

- El array debe tener al menos 2 elementos
- Todos los elementos deben ser **enteros**
- El objetivo (`target`) debe ser un número entero
- Devuelve `null` si no encuentra un par válido

---

## 🗃️ Estructura de carpetas

```
.
├── src/
│   └── main.ts               # Lógica principal
├── tests/
│   └── main.test.ts          # Pruebas con Jest
├── dist/                     # Código compilado
├── jest.config.js
├── tsconfig.json
└── README.md
```

---

## 👨‍💻 Autor

Piero Alvaro Salazar Calle – [@mr.pieromental](https://github.com/Pieromental)

