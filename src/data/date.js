export const dateToLocale = (date) => {
    let dateAsDate = new Date(date)

    return dateAsDate.toLocaleString(
        "default",
        {month: "long", day: "numeric", year: "numeric"},
    )
}