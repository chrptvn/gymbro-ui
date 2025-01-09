export function formatWordForUrl(word: string): string {
    return word
        .normalize('NFD')  // Decompose accented characters
        .replace(/[\u0300-\u036f]/g, '')  // Remove diacritics (accents)
        .replace(/ /g, '-')  // Replace spaces with dashes
        .replace(/&/g, 'and')  // Replace '&' with 'and'
        .toLowerCase();  // Convert to lowercase
}
