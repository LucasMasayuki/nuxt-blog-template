import fs from "fs"
import path from "path"

export interface MarkdownFile {
    fileName: string
    content: string
}

export async function getMarkdownFiles(directory: string): Promise<MarkdownFile[]> {
    const files = await fs.promises.readdir(directory)

    const markdownFiles: MarkdownFile[] = []

    for (const file of files) {
        const filePath = path.join(directory, file)
        const fileStats = await fs.promises.stat(filePath)

        if (fileStats.isFile() && path.extname(file) === ".md") {
            const content = await fs.promises.readFile(filePath, "utf-8")
            markdownFiles.push({ fileName: file, content })
        }
    }

    return markdownFiles
}
