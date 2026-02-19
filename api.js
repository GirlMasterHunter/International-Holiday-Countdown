export async function getNextHoliday(country) {
    const res = await fetch(
        `https://date.nager.at/api/v3/NextPublicHolidays/${country}`
    );

    const data = await res.json();

    return data[0];
}