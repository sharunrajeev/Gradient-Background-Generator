function handleChange() {
    var color1 = $("#color1").val();
    var color2 = $("#color2").val();
    var degree = $("#degree").val() + "deg";
    $("body").css("--color1", color1);
    $("body").css("--color2", color2);
    $("body").css("--degree", degree);
    $("#result").text("linear-gradient(" + degree + "deg, " + color1 + ", " + color2 + ");");
}

const aioColors = document.querySelectorAll('#result');

aioColors.forEach(color => {
    color.addEventListener('click', () => {
        const selection = window.getSelection();
        const range = document.createRange();
        range.selectNodeContents(color);
        selection.removeAllRanges();
        selection.addRange(range);

        try {
            document.execCommand('copy');
            selection.removeAllRanges();

            const original = color.textContent;
            color.textContent = 'Copied!';
            color.classList.add('success');

            setTimeout(() => {
                color.textContent = original;
                color.classList.remove('success');
            }, 1200);
        } catch (e) {
            const errorMsg = document.querySelector('.error-msg');
            errorMsg.classList.add('show');

            setTimeout(() => {
                errorMsg.classList.remove('show');
            }, 1200);
        }
    });
});