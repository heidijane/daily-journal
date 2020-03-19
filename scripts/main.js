import { getJournalEntries } from "./JournalDataProvider.js";
import { EntryListComponent } from "./JournalEntryList.js";
import { JournalFormComponent } from "./JournalForm.js";

JournalFormComponent()
getJournalEntries().then(EntryListComponent)