// db for simulations before connecting to the real data base.

let note1, note2, note3;
const useGetNotes = () => {
    const notes = [
        note1 = {
            id: 1001,
            title: "Título de la primera nota",
            description: "Descripción de la segunda nota"
        },
        note2 = {
            id: 1002,
            title: "Título de la segunda nota",
            description: "Descripción de la segunda nota"
        },
        note3 = {
            id: 1003,
            title: "Título de la tercera nota",
            description: "Descripción de la tercera nota"
        }
    ]

    return(
        notes
    );
}



export default useGetNotes;