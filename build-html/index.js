import fs from 'fs'

export default function buidHTML (html) {
    const filename = './index.html'

    const stream = fs.createWriteStream(filename)

    stream.once('open', () => {
        const mount = mountHTML(html)
        stream.end(mount)
    })

}

function mountHTML (html) {
    return `
        <html>
            <body>
                ${html}
            </body>
        </html>
    `
}