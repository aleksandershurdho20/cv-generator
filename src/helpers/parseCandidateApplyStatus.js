export const parseCandidateApplyStatus=(value) =>{
    if(value === "rejected") return "Refuzuar"
    if(value === "applied") return "Aplikuar"
    if (value === "shortlisted")return "Perzgjedhur!"

    return undefined
}