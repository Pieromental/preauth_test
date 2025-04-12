# Gilded Rose Refactoring Kata con Patrón Strategy

## 🧠 Objetivo

Refactorizar el código legado de `GildedRose` y añadir soporte para un nuevo tipo de ítem: **Conjured**, utilizando el patrón de diseño **Strategy**, cumpliendo con buenas prácticas de diseño, eficiencia y facilidad de pruebas.

Este ejercicio forma parte del reto técnico proporcionado por **PreAuth**, el cual puede encontrarse en el siguiente enlace:  
👉 [Descripción del reto en GitHub](https://github.com/emilybache/GildedRose-Refactoring-Kata)

---

## ✅ Características implementadas

- Refactorización usando el patrón **Strategy** para separar la lógica de actualización por tipo de ítem.
- Estructura orientada a objetos con una interfaz común `UpdateStrategy`.
- Separación clara de responsabilidades en carpetas (`classes`, `helpers`, `strategies`, `interfaces`, `config`).
- Validaciones de calidad máxima y mínima según reglas del negocio.
- Proyecto desarrollado completamente en **TypeScript**.
- Suite de pruebas unitarias completas con **Jest**.

---

## 🚀 Cómo ejecutar el proyecto

```bash
git clone https://github.com/pieromental/preauth_test.git
cd game-02
npm install
npm test            # Ejecuta todos los tests
npm run compile     # Compila el proyecto con TypeScript
npm run coverage    # Genera el reporte de cobertura
```

---

## 🤮 Reglas por tipo de ítem

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

- Pruebas unitarias por estrategia individual.
- Pruebas de integración para `GildedRose`.
- Validación de reglas de negocio y casos extremos (`quality = 0`, `quality = 50`, `sellIn <= 0`).
- Cobertura generada con `jest --coverage`.

---

## 📂 Estructura del proyecto

```
/app
  /classes        # Clases para cada tipo de item (AgedBrie, Conjured, etc.)
  /config         # Constantes globales
  /helpers        # Funciones puras como increase/decreaseQuality
  /interfaces     # Interfaces como UpdateStrategy
  /strategies     # Diccionario de estrategias (strategy map)
  gilded-rose.ts  # Lógica central de iteración sobre los items

/tests
  /classes        # Tests unitarios por estrategia
  gilded-rose.test.ts  # Test de integración general
```

---

## 🤝 Evaluación esperada

- ✅ Buenas prácticas de código (modular, legible, sin duplicación)
- ✅ Patrón Strategy bien aplicado (una clase por tipo de lógica)
- ✅ Código orientado a objetos con principios SOLID
- ✅ Tests claros y cubriendo todos los escenarios

---

## 👨‍💻 Autor

Piero Alvaro Salazar Calle – [@mr.pieromental](https://github.com/Pieromental)
