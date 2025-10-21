
function tri(numbers, order) {

    if (order === "asc") {
        return numbers.sort(function(a, b) {
            return a - b;
        });
    } else if (order === "desc") {
        return numbers.sort(function(a, b) {
            return b - a;
        });
    } else {
        console.log("Erreur : order doit être 'asc' ou 'desc'");
        return numbers;
    }
}



