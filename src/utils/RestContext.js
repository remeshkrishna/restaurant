import { createContext } from "react";

const RestContext = createContext({
    allData: [],
    filterData: []
})

export default RestContext;