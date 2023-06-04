var erklaerung = `Die Subtraktion von Brüchen erfolgt in drei Schritten:

1. Stelle sicher, dass die Brüche den gleichen Nenner haben. Falls nicht, finde den kleinsten gemeinsamen Nenner und bringe beide Brüche auf diesen Nenner.

2. Ziehe die Zähler der Brüche voneinander ab. Der Nenner bleibt unverändert.

3. Vereinfache das Ergebnis, indem du sowohl Zähler als auch Nenner durch ihren größten gemeinsamen Teiler teilst.

Beispiel:
Angenommen, wir möchten den Bruch 3/4 vom Bruch 2/3 subtrahieren.

1. Die Brüche haben unterschiedliche Nenner: 4 und 3. Der kleinste gemeinsame Nenner ist 12.
   Bruch 1: 3/4 * (3/3) = 9/12
   Bruch 2: 2/3 * (4/4) = 8/12

2. Subtraktion der Zähler: 9/12 - 8/12 = 1/12.

3. Der Bruch 1/12 kann nicht weiter vereinfacht werden.

Das Ergebnis der Subtraktion von 3/4 - 2/3 ist also 1/12.`;

function subtraktion_von_brüchen() {
  var element = document.getElementById("ergebnis");
  var lines = erklaerung.split("\n");
  var index = 0;
  var interval = setInterval(function() {
    if (index < erklaerung.length) {
      if (erklaerung[index] === "\n") {
        element.innerHTML += "<br>";
      } else {
        element.innerHTML += erklaerung[index];
      }
    }
    index++;
    if (index >= erklaerung.length) {
      clearInterval(interval);
    }
  }, 25);
  document.getElementById("Button1").disabled= true;
}

var erklaerung1 = `Subtraktion ist eine mathematische Operation, die verwendet wird, um den Unterschied oder das Ergebnis des Entfernens oder Abziehens einer Zahl von einer anderen zu berechnen. In einem Subtraktionsproblem wird die Zahl, die subtrahiert wird, als Subtrahend bezeichnet, und die Zahl, von der subtrahiert wird, wird als Minuend bezeichnet. Das Ergebnis der Subtraktion wird als Differenz bezeichnet.

Die Subtraktion wird normalerweise durch das Minuszeichen (-) dargestellt. Um eine Subtraktion durchzuführen, zieht man den Subtrahend von der Minuend ab. Das Ergebnis gibt an, wie viel größer oder kleiner der Subtrahend im Vergleich zur Minuend ist.

Beispielsweise, in der Subtraktion 9 - 5 = 4, ist 9 der Minuend, 5 der Subtrahend und 4 die Differenz. Dies bedeutet, dass der Subtrahend 5 kleiner ist als die Minuend 9.

Die Subtraktion kann auch als umgekehrte Operation zur Addition betrachtet werden. Wenn wir das Ergebnis einer Subtraktion und den Subtrahend kennen, können wir die Minuend berechnen, indem wir die Differenz zum Subtrahend addieren.`;

function subtraktion() {
  var element = document.getElementById("ergebnis1");
  var lines = erklaerung.split("\n");
  var index = 0;
  var interval = setInterval(function() {
    if (index < erklaerung1.length) {
      if (erklaerung1[index] === "\n") {
        element.innerHTML += "<br>";
      } else {
        element.innerHTML += erklaerung1[index];
      }
    }
    index++;
    if (index >= erklaerung1.length) {
      clearInterval(interval);
    }
  }, 25);
  document.getElementById("Button2").disabled= true;
}