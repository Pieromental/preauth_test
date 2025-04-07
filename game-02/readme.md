# Gilded Rose Refactoring Kata

## 🧠 Objetivo

Refactorizar el código legado de `GildedRose` y añadir soporte para un nuevo tipo de ítem: **Conjured**, cumpliendo con buenas prácticas de diseño, eficiencia y facilidad de pruebas.

Este ejercicio forma parte del reto técnico proporcionado por **PreAuth**, el cual puede encontrarse en el siguiente enlace:  
👉 [Descripción del reto en GitHub](https://github.com/preauth-io/challenge/tree/main/game-02)


---

## ✅ Características implementadas

- Refactorización modular y orientado a funciones puras por tipo de ítem.
- Separación clara de responsabilidades en carpetas (`classes`, `helpers`, `config`).
- Validaciones de calidad máxima y mínima según reglas del negocio.
- Lógica centralizada para `updateQuality`, con funciones específicas por ítem.
- Suite completa de tests con Jest para cada caso de uso.
- Proyecto desarrollado en **TypeScript**.

---

## 🚀 Cómo ejecutar el proyecto

```bash
git clone https://github.com/pieromental/preauth_test.git
cd game-02
npm install
npm test           # Ejecuta todos los tests
npm run compile     # Compila el proyecto con TypeScript
npm run coverage    # Genera el reporte de cobertura
```

---

## 🧪 Reglas por tipo de ítem

### Normal Items
- Calidad baja -1 cada día.
- Si está vencido (`sellIn <= 0`), baja -2.
- `quality` nunca es menor a 0.

### Aged Brie
- Incrementa su calidad con el tiempo.
- +1 por día si `sellIn > 0`, +2 si está vencido.
- `quality` nunca supera 50.

### Backstage passes
- +1 si `sellIn > 10`
- +2 si `6 <= sellIn <= 10`
- +3 si `1 <= sellIn <= 5`
- `quality = 0` si `sellIn <= 0`

### Sulfuras
- `sellIn` y `quality` no cambian.
- Siempre tiene `quality = 80`.

### Conjured
- Degrada el doble que un ítem normal.
- -2 por día si no está vencido, -4 si lo está.
- `quality` nunca es menor a 0.

---

## 📊 Cobertura de pruebas

- Test unitarios detallados para cada tipo de ítem.
- Validación de reglas de negocio.
- Validación de extremos (`quality = 0`, `quality = 50`, `sellIn <= 0`).
- Cobertura de código generada con `jest --coverage`.

---

## 📂 Estructura del proyecto

```
/app
  ├── classes/
  ├── config/
  ├── helpers/
  └── gilded-rose.ts

/__tests
  └── gilded-rose.test.ts
```

---

## 🤝 Evaluación esperada

- ✅ Buenas prácticas de código (modular, legible)
- ✅ Código autoexplicativo (self-documenting)
- ✅ Eficiencia en ejecución y uso de memoria
- ✅ Código fácil de testear (clases y funciones unitarias)

## 👨‍💻 Autor

Piero Alvaro Salazar Calle – [@mr.pieromental](https://github.com/Pieromental)
