import { create } from 'zustand'

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
    technologies: [
        {
            label: "React",
            checked: false
        }, {
            label: "Tailwind",
            checked: false
        }
    ]
}

const useFilters = create((set) => ({
    ...initialState
}));

export default useFilters;