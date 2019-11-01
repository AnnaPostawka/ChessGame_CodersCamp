// klasa abstrakcyjna - od niej będą dziedziczyć wszystkie inne figury
// Odpowiedzialność: zdefiniowanie wszystkich właściwości i metod, które dzielą figury 
// Wszystkie klasy z folderu Pieces to klasy logiczne - służą do obliczeń i wewnętrzenej mechaniki gry, nie do 
// wyświetlania, ani tworzenia interfejsu
class Piece {
    // przykładowy konstruktor
    constructor(x,y) {
        this._x = x;
        this._y = y;
    }
}

export default Piece;