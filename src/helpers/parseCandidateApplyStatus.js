export const translateStatus=(value) =>{
    if(value === "rejected") return "Refuzuar"
    if(value === "applied") return "Aplikuar"
    if (value === "shortlisted")return "Perzgjedhur"

    return undefined
}

export const parseCandidateApplyStatus = (data) =>{
    return data?.map(el =>{
        return {
            ...el,
            _id:translateStatus(el._id)
        }
    })
}