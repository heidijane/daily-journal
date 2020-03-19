const eventHub = document.querySelector(".container")

const dispatchStateChangeEvent = () => {
    const noteStateChangedEvent = new CustomEvent("noteStateChanged")

    eventHub.dispatchEvent(noteStateChangedEvent)
}

let entries = []

export const useJournalEntries = () => {

    //get a copy of the entries to sort
    let sortedByDate = entries.slice()

    //sort the journal entries in descending order
    sortedByDate = sortedByDate.sort(
        (currentEntry, nextEntry) =>
        Date.parse(nextEntry.date) - Date.parse(currentEntry.date)
    )
    return sortedByDate

}

export const getJournalEntries = () => {
    return fetch('http://localhost:8088/entries')
        .then(response => response.json())
        .then(parsedEntries => {
            entries = parsedEntries
        })
}

export const saveEntry = entry => {
    return fetch('http://localhost:8088/entries', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(entry)
        })
        .then(getJournalEntries)
        .then(dispatchStateChangeEvent)
}