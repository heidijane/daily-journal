/*
 *  Purpose: To render a single journal entry as an
 *           HTML representation of the data
 */
const JournalEntryComponent = (entry) => {
    return `
        <section id="entry--${entry.id}" class="journalEntry">
            <div class="journalEntry__concept">${entry.concept}</div>
            <div class="journalEntry__mood">${entry.mood}</div>
            <div class="journalEntry__entry">${entry.entryText}</div>
            <div class="journalEntry__date">${entry.date}</div>
        </section>
    `
}

export default JournalEntryComponent