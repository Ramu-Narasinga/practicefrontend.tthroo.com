import { create } from 'zustand'

export type CategoryType = {
    label: string;
    checked: boolean;
}

const initialState = {
    categories: [
        {
            label: "Components",
            checked: false
        }, {
            label: "Pages",
            checked: false
        }, {
            label: "Projects",
            checked: false
        }, {
            label: "Open Source Libraries",
            checked: false
        }
    ],
    cssFrameworks: [
        {
            label: "Vanilla",
            checked: false
        }, {
            label: "Bootstrap",
            checked: false
        }, {
            label: "Tailwind",
            checked: false
        }
    ],
    componentLibraries: [
        {
            label: "Shadcn/ui",
            checked: false
        }, {
            label: "Mantine",
            checked: false
        }
    ]
}

const useFilters = create((set) => ({
    ...initialState
}));

export default useFilters;