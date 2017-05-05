import { DiscoItem } from './disco-item';

export const Discography: DiscoItem[] = [
    {
        title: 'Oscillations',
        identifier: 'oscillations',
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
                name: 'Håvard',
                instrument: 'Guitar and vocals'
            },
            {
                name: 'Hans Jørgen',
                instrument: 'Drums and vocals'
            },
            {
                name: 'Eyvind',
                instrument: 'Bass guitar, electric upright bass, theremin and vocals'
            }
        ]
    },
    /* **************************
    DYSTOPICS
    *************************** */
    {
        title: 'Dystopics',
        identifier: 'dystopics',
        versions: [
            {
                label: 'No Posers Please!',
                year: 2012,
                format: 'Digipak CD',
                catalogNumber: 'NPP011'
            },
            {
                label: 'No Posers Please!',
                year: 2012,
                format: 'Vinyl LP (yellow/black)',
                catalogNumber: 'NPP011'
            },
            {
                label: 'Escaravelho Records',
                year: 2013,
                format: 'Tape',
                catalogNumber: 'Escaravelho08'
            }
        ],
        images: [
            {
                path: 'assets/img/releases/dystopics/sleeve_diskord_dystopics.jpg',
                caption: 'Dystopics LP front cover, by Sindre Foss Skancke'
            },
            {
                path: 'assets/img/releases/dystopics/sleeve_diskord_dystopics_lp_2.jpg',
                caption: 'Dystopics LP'
            },
            {
                path: 'assets/img/releases/dystopics/sleeve_diskord_dystopics_mc_with_merch.jpg',
                caption: 'Dystopics MC with lighter goodie'
            },
            {
                path: 'assets/img/releases/dystopics/sleeve_diskord_dystopics_mc_3.jpg',
                caption: 'Dystopics MC with inlay'
            }
        ],
        quotes: [
            {
                quote: 'Wonderfully avant-garde; utterly fantastic; remarkably',
                cite: 'The Metal Advisor',
            },
            {
                quote: 'As far from mainstream death metal as you could possibly get',
                cite: 'Scream Magazine'
            },
            {
                quote: 'Old school razor-wire riffs [...], wonderful, organic production aesthetics',
                cite: 'Terrorizer Magazine'
            },
            {
                quote: 'Dystopics is a clusterfuck of Gorguts-meets-Atheist rhythms and aggression done in an old-school-meets-new-school manner',
                cite: 'No Clean Singing'
            }
        ],
        lineup: [
            {
                name: 'Espen',
                instrument: 'Guitars and vocals'
            },
            {
                name: 'Eyvind',
                instrument: 'Bass and vocals'
            },
            {
                instrument: 'Drums and vocals',
                name: 'Hans Jørgen',
            }
        ]
    },
    /* **************************
    OSLO WE ROT
    *************************** */
    {
        title: 'Oslo We Rot',
        identifier: 'OsloWeRot',
        versions: [
            {
                label: 'Unborn Productions',
                year: 2010,
                format: '2x Split 7"',
                catalogNumber: 'COVEN001'
            },
            {
                label: 'Snake Oil Kassettforlag / Unborn Productions',
                year: 2017,
                format: 'MC',
                catalogNumber: 'Cure07 / Coven016'
            }
        ],
        images: [
            {
                path: 'assets/img/releases/oslo-we-rot/Oslo_We_Rot-front-cover.jpg',
                caption: 'Oslo We Rot front cover, by Kristian Valbo'
            },
            {
                path: 'assets/img/releases/oslo-we-rot/Oslo_We_Rot-collage.jpg',
                caption: 'Oslo We Rot split vinyl collage'
            },
            {
                path: 'assets/img/releases/oslo-we-rot/Oslo_We_Rot_tape.jpg',
                caption: 'Oslo We Rot tape release'
            }
        ],
        quotes: [        ],
        lineup: [
            {
                name: 'Espen',
                instrument: 'Guitars and vocals'
            },
            {
                name: 'Eyvind',
                instrument: 'Bass and vocals'
            },
            {
                instrument: 'Drums and vocals',
                name: 'Hans Jørgen',
            }
        ]
    }
];
