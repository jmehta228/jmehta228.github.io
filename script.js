window.onload = function() {
    const canvas = document.getElementById('animation');
    const ctx = canvas.getContext('2d');

    const firstText = "     > gcc main.c -o main.out";
    const secondText = "     > ./main.out";
    const thirdText = "     Hello";


    // Set font properties
    ctx.font = '20px Verdana, Geneva, Tahoma, sans-serif';
    ctx.fillStyle = 'white'; // Change the color of the text here

    // Define the y-coordinate positions for each line of text
    const text1Y = 100;
    const text2Y = 130;
    const text3Y = 160;

    function drawTopArea() {
        ctx.fillStyle = '#404040'; // Background color for the top area
        ctx.fillRect(0, 0, canvas.width, 40); // Draw the background rectangle
    }

    // Function to animate typing text onto canvas
    function animateTyping(text, yPos, callback, delay = 0) {
        let index = 0;
        const intervalId = setInterval(() => {
            ctx.clearRect(0, yPos - 15, canvas.width, 20); // Clear the area before drawing the next character
            ctx.fillText(text.substring(0, index), 50, yPos); // Draw text up to the current character index
            index++;
            if (index > text.length) {
                clearInterval(intervalId);
                if (callback) {
                    setTimeout(callback, delay);
                }
            }
        }, 100); // Adjust the typing speed here
    }

    drawTopArea();

    animateTyping(firstText, text1Y, () => {
        animateTyping(secondText, text2Y, () => {
            const delayBeforeThirdText = 1000;
            setTimeout(() => {
                ctx.clearRect(0, text3Y - 15, canvas.width, 20); // Clear the area before drawing the text
                ctx.fillText(thirdText, 50, text3Y); // Draw the third text
            }, delayBeforeThirdText);
        });
    });
    

    // Draw window controls (red, yellow, and green circles)
    ctx.fillStyle = '#FF3B30'; // Red color
    ctx.beginPath();
    ctx.arc(20, 20, 8, 0, 2 * Math.PI);
    ctx.fill();

    ctx.fillStyle = '#FFCC00'; // Yellow color
    ctx.beginPath();
    ctx.arc(45, 20, 8, 0, 2 * Math.PI);
    ctx.fill();

    ctx.fillStyle = '#4CD964'; // Green color
    ctx.beginPath();
    ctx.arc(70, 20, 8, 0, 2 * Math.PI);
    ctx.fill();

    ctx.fillStyle = 'white'; // Change the color of the text here
};