/*
 *  Purpose: To render a single journal entry as an
 *           HTML representation of the data
 */

//get corresponding emoji for journal entry mood
// const getEmoji = (mood) => {
//     const emoji = 😃;
//     switch (mood) {
//         case 'excited':
//             emoji = 😊
//             break;
//         case 'excited';
//             emoji = 😊
//             break;

//     }
// }

const JournalEntryComponent = (entry) => {
    return `
        <article id="entry--${entry.id}" class="journalEntry">
            <div class="journalEntry__concept"><span class="journalEntry__mood">${entry.mood}</span${entry.concept}</div>
            <div class="journalEntry__entry">${entry.entryText}</div>
            <div class="journalEntry__date">${entry.date}</div>
        </article>
    `
}

export default JournalEntryComponent