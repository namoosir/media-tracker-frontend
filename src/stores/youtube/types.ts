import type { StoreDefinition } from "pinia";

type YoutubeStore = StoreDefinition<
    "youtube",
    {},
    { finishedSync() : boolean },
    {}
>

export type { YoutubeStore }