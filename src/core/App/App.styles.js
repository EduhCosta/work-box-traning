import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed,
    figure, figcaption, footer, header, hgroup,
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
        box-sizing: border-box;
        font-family: Arial, Helvetica, sans-serif !important;
        font-size: 14px;
    }
    article, aside, details, figcaption, figure,
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        line-height: 1;
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
    select {
        display: block;
        position: relative;
        padding: 4px 8px;
        font-size: 18px;
        width: 94%;
        margin-left: 3%;
    }
    label {
        display: block;
        position: relative;
        color: #575757;
        margin: 0px 0px 8px 12px;
    }
    button[type='submit'] {
        width: 100%;
        padding: 12px;
        text-align: center;
        font-size: 18px;
        background-color: orange;
        color: white;
        border-radius: 3px;
        border: none;
        box-shadow: 1px 1px 3px #AAA;
    }
`

export { GlobalStyle };
