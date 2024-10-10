import markdownit from 'markdown-it'
import hljs from 'highlight.js'

export default function mdparser(mdtext) {
  const md = markdownit({
    highlight: function (str, lang) {
      if (lang && hljs.getLanguage(lang)) {
        try {
          return hljs.highlight(str, { language: lang }).value
        } catch (__) {}
      }

      return '' // use external default escaping
    }
  })
  const result = md.render(mdtext)
  return result
}
