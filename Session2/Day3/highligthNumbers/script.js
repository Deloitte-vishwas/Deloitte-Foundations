function highlightNumbers(){
    const textArea = document.getElementById("myTextArea");
    const highlightNumbersElement = document.getElementById("highlightedNumbers");

    const text = textArea.value;
    // const numbers = text.match(/\d+/g);
    const numbers = text.match(/\d+\.\d{2}/g);
    

    if(numbers){
        highlightNumbersElement.textContent = numbers.join(", ");
    }  else{
        highlightNumbersElement.textContent = "No numbers found.";
    }
}