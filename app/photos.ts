export const photos = Array.from({ length: 15 }, (_, i) => ({
    src: `/hayatim/${i + 1}.jpg`,
    alt: "Canikom ve ben",
    id: i + 1
}));
