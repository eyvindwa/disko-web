export interface DiscoItem {
    title: string;
    identifier: string;
    versions:
    {
        label: string;
        year: number;
        format: string;
        catalogNumber: string;
    }[];
    images:
    {
        path: string;
        caption: string;
    }[];
    quotes:
    {
        quote: string;
        cite: string;
    }[];
    lineup:
    {
        name: string;
        instrument: string;
    }[];
}
