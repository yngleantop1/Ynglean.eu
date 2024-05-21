// Funkcja do pobierania pliku TXT
    function pobierzPliki() {
        // Tworzymy 50 plików do pobrania
        for (let i = 1; i <= 3; i++) {
            // Tworzymy element <a> dla każdego pliku, który posłuży do pobrania pliku
            var link = document.createElement("a");
            link.download = "Plik" + i + "YngLeanOnTop1 👑🍾🧿🍾👑"; // Nazwa pliku do pobrania
            link.href = "data:text/plain;charset=utf-8," + encodeURIComponent("PAMIĘTAJ BRACIE YNGLEAN ON TOP1 !!! 👑 PAMIĘTAJ BRACIE YNGLEAN ON TOP1 !!! 👑 PAMIĘTAJ BRACIE YNGLEAN ON TOP1 !!! 👑 PAMIĘTAJ BRACIE YNGLEAN ON TOP1 !!! 👑 PAMIĘTAJ BRACIE YNGLEAN ON TOP1 !!! 👑 PAMIĘTAJ BRACIE YNGLEAN ON TOP1 !!! 👑 PAMIĘTAJ BRACIE YNGLEAN ON TOP1 !!! 👑 " + i); // Zawartość pliku TXT

            // Kliknięcie na element <a> automatycznie pobierze plik
            document.body.appendChild(link);
            link.click();

            // Usuwamy element <a> po pobraniu pliku
            document.body.removeChild(link);
        }
    }

    // Wywołujemy funkcję pobierania plików po załadowaniu strony
    window.onload = function() {
        pobierzPliki();
    };