import { getJournalEntries } from "./JournalDataProvider.js";
import { EntryListComponent } from "./JournalEntryList.js";

getJournalEntries().then(EntryListComponent)