# Rechner

Ein einfacher Rechner, der grundlegende mathematische Operationen ausführt.

## Installation

Es ist keine Installation erforderlich, da es sich um eine einfache JavaScript-Klasse handelt. Kopieren Sie den Code einfach in Ihr Projekt.

## Verwendung

Erstellen Sie eine Instanz der Calculator-Klasse und verwenden Sie ihre Methoden, um Berechnungen durchzuführen:

```javascript
let calculate = new Calculator();

// Zeigt die Summe von Pi an
calculate.piSum();

// Zeigt die Euler'sche Zahl an
calculate.eulerSum();

// Berechnet das Höhenverhältnis basierend auf der Breite
calculate.ratio(2, 2, 10);

// Berechnet den Prozentsatz von x in y
calculate.percentage(10, 2);

// Führt eine Addition durch
calculate.add(4, 5);

// Führt eine Subtraktion durch
calculate.subtract(4, 5);

// Führt eine Multiplikation durch
calculate.multiply(4, 5);

// Führt eine Division durch
calculate.divide(5, 4);

// Berechnet den Modulo (Rest) einer Division
calculate.modulation(5, 4);

// Erhebt x zur Potenz y
calculate.elevate(2, 3);

// Berechnet die Quadratwurzel von x
calculate.sqrt(64);
```
