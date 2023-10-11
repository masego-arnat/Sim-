
var documentId = ""; // Replace with the actual document ID you want to delete


// Delete the document
// deleteDB
//     .doc(documentId)
//     .delete()
//     .then(() => {
//         console.log("Document successfully deleted!");
//     })
//     .catch((error) => {
//         console.error("Error deleting document: ", error);
//     });




// Handle button click event
$('#example').on('click', '.delete-button', function () {
    var id1 = $(this).data('id');


    documentId = id1;
    console.log("isja",)
    const booksss = firebase.firestore().collection("KitNumbers");
    booksss.get().then((snapshot) => {

        const data = snapshot.docs.map((doc) => ({
            id: doc.id,

            ...doc.data()

        }));
        const specificDoc = data.find((doc) => doc.id === id1);

        if (specificDoc) {


            const name = specificDoc.name;
            const date = specificDoc.date;

            $('#deleteName').val(specificDoc.name);



        } else {
            console.log("No such document!");
            $('#ErrorModal').modal('show');
        }



    });

    $('#DeleteModal').modal('show');

});

$(document).ready(function () {
    $("#delete").click(function () {
        document.getElementById("deleteloaderBtn").style.display = "block";
        document.getElementById("delete").style.display = "none";
        const deleteDB = firebase.firestore().collection("KitNumbers");

        deleteDB
        .doc(documentId)
        .delete()
        .then(() => {
            console.log("Document successfully deleted!");
            $('#DeleteModal').modal('hide');

            window.location.reload();
        })
        .catch((error) => {
            console.error("Error deleting document: ", error);
            $('#ErrorModal').modal('show');
        });
    });
});