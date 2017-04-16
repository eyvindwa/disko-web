import {DiscoItem} from './disco-item';

export const Discography: DiscoItem[] = [
    {
        title: 'Oscillations',
        versions: [
            {
                label: 'Hellthrasher Productions',
                year: 2014,
                format: 'Digipak CD',
                catalogNumber: 'Hellthrasher XXXV'
            },
            {
                label: 'Hellthrasher Productions',
                year: 2014,
                format: 'Vinyl LP (red/black)',
                catalogNumber: 'Hellthrasher XXXV'
            },
            {
                label: 'Australopithecus Records',
                year: 2014,
                format: 'Vinyl LP (blue/black)',
                catalogNumber: 'PITH04'
            },
            {
                label: 'Snake Oil Kassettforlag',
                year: 2016,
                format: 'Tape',
                catalogNumber: 'CURE04'
            },
        ],
        images: [
            {
                path: 'assets/img/releases/oscillations/Diskord_Oscillations_LP_version_RGB_1000_px.jpg',
                caption: 'Oscillations LP front cover, by Sindre Foss Skancke'
            },
            {
                path: 'assets/img/releases/oscillations/oscillations-cd.jpg',
                caption: 'Oscillations CD'
            },
            {
                path: 'assets/img/releases/oscillations/oscillations-mc.jpg',
                caption: 'Oscillations MC'
            }
        ],
        quotes: [
            {
                quote: 'The music itself is wild, insane, unpredictable and highly creative [...] For those of you who love old-school extreme metal, yet yearn for something different from the norm; this could well be for you.',
                cite: 'Ave Noctum',
            },
            {
                quote: 'a jarring exercise in unorthodox death metal, uniting both the primitive and the complex into an inseparable mass, with bile and broken bones trailing in its wake.',
                cite: 'No Clean Singing'
            },
            {
                quote: 'a marvelous ability to twist old-school tropes into exciting new shapes',
                cite: 'Stereogum'
            },
            {
                quote: 'If you’re looking for something to get the frayed wires in your head operating again or just want to get you face smashed by something intelligent and thought provoking, this band can treat what ails you every damn time.',
                cite: 'Meat Mead Metal'
            }
        ],
        lineup: [
            {
                name: 'Eyvind',
                instrument: 'Bass guitar, electric upright bass, theremin and vocals'
            },
            {
                name: 'Håvard',
                instrument: 'Guitar and vocals'
            },
            {
                name: 'Hans Jørgen',
                instrument: 'Drums and vocals'
            }

        ]
    }
]