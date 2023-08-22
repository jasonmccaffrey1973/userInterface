export const THEMES = ['dark', 'light', 'custom'];

const baseColors = {
    Black: 'hsla(0, 0%, 0%, 1)',
    White: 'hsla(0, 0%, 100%, 1)',
    Gray: 'hsla(0, 0%, 50%, 1)',
    Red: 'hsla(0, 100%, 50%, 1)',
    Orange: 'hsla(39, 100%, 50%, 1)',
    Yellow: 'hsla(60, 100%, 50%, 1)',
    Green: 'hsla(120, 100%, 25%, 1)',
    Blue: 'hsla(240, 100%, 50%, 1)',
    Indigo: 'hsla(275, 100%, 27%, 1)',
    Violet: 'hsla(300, 76%, 72%, 1)'
};

export const darkTheme = { ...baseColors,
    Primary: 'hsla(260, 11%, 31%, 1)',
    PrimaryLight: 'hsla(260, 11%, 50%, 1)',
    Secondary: 'hsla(296, 9%, 37%, 1)',
    Accent: 'hsla(20, 55%, 41%, 1)',
    Text: 'hsla(43, 48%, 93%, 1)',
    TextAccent: 'hsla(43, 100%, 90%, 1)',
};

export const lightTheme = { ...baseColors,
    Primary: 'hsla(43, 48%, 93%, 1)',
    PrimaryLight: 'hsla(43, 48%, 97%, 1)',
    Secondary: 'hsla(0, 0%, 100%, 1)',
    Accent: 'hsla(47, 42%, 76%, 1)',
    Text: 'hsla(260, 11%, 31%, 1)',
    TextAccent: 'hsla(45, 4%, 1%, 1)',
};
