export const timeout = delay =>
    new Promise((resolve) => {
        setTimeout(resolve, delay)
    })

export const flattenPost = ({
    author: { id: user_id },
    content: { document },
    id,
    title,
}) => ({
    id,
    user_id,
    title,
    body: document.map(node => {
        return node.children.reduce((a, c) => a + c.text, '')
    }).join("\n")
})
