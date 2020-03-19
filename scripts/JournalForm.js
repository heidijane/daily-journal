import { saveEntry } from "./JournalDataProvider.js"


const contentTarget = document.querySelector(".journalForm")

// Save the note to the API when record button is clicked
contentTarget.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "journalForm_submit") {

        const date = document.getElementById("journalForm__field__date").value
        const concept = document.getElementById("journalForm__field__concepts").value
        const entryText = document.getElementById("journalForm__field__entry").value
        const mood = document.getElementById("journalForm__field__mood").value


        //Make a new object representation of the entry
        const newEntry = {
            // Key/value pairs here
            date: date,
            concept: concept,
            entryText: entryText,
            mood: mood
        }

        // Change API state and application state
        saveEntry(newEntry)
    }
})

const render = () => {
    contentTarget.innerHTML = `
    <fieldset class="journalForm__field">
            <label for="journalForm__field__date">Date</label>
            <input type="date" name="journalForm__field__date" id="journalForm__field__date">
        </fieldset>

        <fieldset class="journalForm__field">
            <label for="journalForm__fieldconcepts">Concepts Covered</label>
            <input type="text" name="journalForm__field__concepts" id="journalForm__field__concepts">
        </fieldset>

        <fieldset class="journalForm__field">
            <label for="journalForm__field__entry">Journal Entry</label>
            <textarea name="journalForm__field__entry" id="journalForm__field__entry" cols="30" rows="10"></textarea>
        </fieldset>

        <fieldset class="journalForm__field">
            <label for="journalForm__field__mood">Mood for the day</label>
            <select name="journalForm__field__mood" id="journalForm__field__mood">
                    <option value="excited">Excited!</option>
                    <option value="happy">Happy</option>
                    <option value="okay">Okay I suppose</option>
                    <option value="frustrated">Frustrated</option>
                    <option value="despair">Inside the abyss of despair</option>
                </select>
        </fieldset>

        <button id="journalForm_submit">Record Journal Entry</button>

        </fieldset>
    `
}

export const JournalFormComponent = () => {
    render()
}