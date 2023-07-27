
// Get the book data dynamically from the user (assuming you have an HTML form)
const form = document.getElementById("bookForm"); // Replace "bookForm" with your form ID

form.addEventListener("submit", (event) => {
    event.preventDefault();
    document.getElementById("createloaderBtn").style.display = "block";
    document.getElementById("createBtn").style.display = "none";

    const Fname = document.getElementById("titleInput").value; // Replace "titleInput" with the input field ID for the title
    // const authorInput = document.getElementById("authorInput").value; // Replace "authorInput" with the input field ID for the author
    const yearInput = document.getElementById("kitdetails").value; // Replace "yearInput" with the input field ID for the published year
    console.log("date gormat ", yearInput,)

    const reversedWords = yearInput.split('-').reverse().join('-');

    console.log("is the oppp", reversedWords);

    const bookData = {
        name: Fname,
        // author: authorInput,
        date: reversedWords, // Assuming the year input is a number

    };

    // Add the data to the collection
    booksRef
        .add(bookData)
        .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
            // Reset the form after successfully adding the data
            form.reset();
            window.location.reload();
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
            $('#ErrorModal').modal('show');
        });
});