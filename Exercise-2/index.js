(function() {
    function findMaxIIFE(...numbers) {
        const max = Math.max(...numbers);
        return max;
    }

    function findMaxCallback(numbers, callback) {
        const max = findMaxIIFE(...numbers);
        callback(max);
    }

    findMaxCallback([690, 693, 692], function(maxNum) {
        console.log(`Nilai terbesar adalah: ${maxNum}`);
    });
})();