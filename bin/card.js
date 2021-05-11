#!/usr/bin/env node
 // ----------------------------------------------------------------------------

// npm
var npxcard = require('npxcard')

// ----------------------------------------------------------------------------
// setup

const sections = [{
        title: 'Adrien Callewaert (Spiderfish)',
        details: [
            ['Email', 'callewaert_adrien@live.fr'],
            ['Web', 'https://adriencallewaert.be/'],
            ['GitHub', 'https://github.com/AdrienCallewaert'],
        ],
    },
    {
        title: 'Graphic designer & web developer',
        details: [
            ['Web Skills', 'html5 - CSS3 - JS- php - mysql - frameworck css & js'],
            ['Graphic skils', 'Photoshop - Illustrator - Indesign - Acrobad'],
            ['Art skils', 'Drawing - PaperCut- Layoute - Rough'],

        ],
    },
    {
        title: 'crédits',
        details: [
            ['Profile', 'https://www.npmjs.com/~chilts'],
            ['Card', '$ npx chilts'],
        ],
    },
]

// ----------------------------------------------------------------------------
// output

const output = npxcard(sections)
console.log(output)

// ----------------------------------------------------------------------------