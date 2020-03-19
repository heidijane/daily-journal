import { useJournalEntries, getJournalEntries } from "./JournalDataProvider.js"
import { JournalEntryComponent } from "./JournalEntry.js"

const eventHub = document.querySelector(".container")

// DOM reference to where all entries will be rendered
const contentElement = document.querySelector(".journalEntries")

const render = () => {
    // // Use the journal entry data from the data provider component
    // const entries = useJournalEntries()

    // for (const entry of entries) {
    //     contentElement.innerHTML += JournalEntryComponent(entry)
    // }

    getJournalEntries().then(() => {
        const allTheEntries = useJournalEntries()
        contentElement.innerHTML = allTheEntries.map(
            currentEntry => {
                return JournalEntryComponent(currentEntry)
            }
        ).join("")
    })
}

export const EntryListComponent = () => {
    render()
}

eventHub.addEventListener("noteStateChanged", customEvent => {
    render()
})