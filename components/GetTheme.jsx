
export default function GetTheme() {
    if (typeof window !== 'undefined') {
        const theme = localStorage.getItem("theme");
        return theme;
    } else {
        return undefined;
    }
}
