Przed rozpocząciem pracy wpisać w konsolę: npm start

W folderze ./dist znajduje sie index.html - strona na której będzie wyświetlana
nasza gra. Zalecam korzystanie z rozszerzenia Live Server (dostępne na pewno w
VSC).

Kilka z poniższych zasad stanowią cześć zasad SOLID. Polecam poszukać w
internecie ich szerszych wytłumaczeń i przykładów, jeśli ktoś nie jest pewien
jak je wykorzystać.

Kilka zasad projektu:

1. Całość jest zorientowana obiektowo - wszystkie funkcje/wartości muszą być
   metodami/właściwościami obiektów.
2. Korzystamy z klas.
3. Zasada jednej odpowiedzialności - każda klasa i funkcja powinna mieć tylko
   jeden cel. Funkcje, które służą do wykonywania skomplikowanych zadań powinny
   wywoływać mniejsze funkcje, które będą wykonywały jedno proste zadanie.
4. Zasada otwarte/zamknięte (otwarte na rozszerzanie, zamknięte na
   modifikacje) - pisząc staramy się sprawić, żeby kod był napisany tak, aby
   dodawanie nowych funkcji do programu wiązało się z rozszerzeniem
   isteniejącego kodu (tworzenie klas pochodnych dodawanie nowych metod i
   właściwości do klas) zamiast modyfikacji (zmienianie już istniejących metod).
5. Zasada podstawiania Liskov - obiekt klas pochodnych powinny móc być
   zastosowane wszędzie tam, gdzie stosowane są obiekty klasy pierwotnej.
6. Oddalone od siebie w drzewie programu klasy (a właściwie instancje tych klas)
   porozumiewają się przez callbacki. Callbacki dostarcza do nich klasa
   zawierająca. Każda klasa, jeśli korzysta z callbacków powinna przygotować
   metody ustawiania callbacków. Przykładowo, załóżmy, że mamy klasę Menu, które
   po przyciśnięciu przycisku Start powinna rozpocząć grę. Klasa ta definiuje
   właściwość Menu.\_onStart, do której można przypisać referencje callbacka
   poprzez metodę Menu.setOnStart.
7. Wszelkie metody i właściwości prywatne w klasach nazywamy według konwencji
   \_ + nazwa metody/właściwości.
8. Właściwości służące do wywoływania nazywamy według konwencji on +
   CzynnośćKtóraWywołujeCallback. Np. onClick albo onMenuItemFocused.
9. Osoby pracujące równolegle nad elementami programu, które bezpośrednio od
   siebie zależą, powinny komunikować się na temat różnych spraw typu nazwy
   metod, nazwy właściwości obiektu inicjalizującego itp.
10. Wszelkie dobre pomysły ułatwiające pracę i dodające ciekawe funkcje mile
    widzane :).
11. Nazwy klas, zmiennych i funkcji piszemy po angielsku, to samo nazwy branchy
    i commity.
12. Komentarze piszemy po polsku. Polecam pisać jak najwięcej zgodnie z zasadą:
    Komentarz odpowiada na pytanie ,,Co to jest?'', a nie na pytanie ,,Dlaczego
    to tu jest?''.
13. Polom szachownicy odpowiadają obiekt o postaci { x: number, y: number} (np. { x: 1, y: 1}). X liczymy od lewej do prawej od 0 do 7, a y od dołu do góry również od 0 do 7.
14. Dodatkowe zasady wkrótce lub nigdy.

W razie jakichkolwiek wątpliwości na temat tych zasad, proszę pisać do mnie.
Oczywiście zasady są po to, żeby je zmieniać, więc wszelkie sugestie na temat
ich zmiany proszę kierować na forum.
