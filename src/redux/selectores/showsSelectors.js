





 import {HIGH_RATED_SHOWS, NEW_SHOWS} from "../../constant/showsConstants" 

import { createSelector} from "reselect"

export const selectAllshows = (state) => state?.shows?.shows || []