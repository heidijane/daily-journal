*
 *   Journal data provider for Daily Journal application
 *
 *      Holds the raw data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */

// This is the original data. Can't Touch This.
const journal = [
    {
        date: "02/25/2020",
        concept: "C37 Capstones",
        entry: "Today we watched Cohort 37's capstone projects. Some of them were pretty cool! I have a few ideas for what I will do with mine.",
        mood: "excited"
    },
    {
        date: "02/26/2020",
        concept: "git and GitHub",
        entry: "We finished our \"Hello World\" group project today. Our turned out pretty well! However, we focused quite a bit on GitHub so we didn't end up having time to try some of the CSS challenges that Steve had given us. Overall have a better handle on git...at least for now!",
        mood: "happy"
    },
    {
        date: "02/27/2020",
        concept: "Javascript",
        entry: "We automated the fish today! I got that working with no problem but had issues getting the dialog buttons to work. It turns out that I had done everything correctly, I was just calling my functions in the wrong order. >__> It was very satifying to get it working!",
        mood: "excited"
    }    
];

/*
    You export a function that provides a version of the
    raw data in the format that you want
*/
export const useJournalEntries = () => {
    const sortedByDate = journal.sort(
        (currentEntry, nextEntry) =>
            Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
    )
    return sortedByDate
}