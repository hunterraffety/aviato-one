import React from 'react'
import { Highlight, Language } from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/github'

interface CodeBlockProps {
  code: string
  language?: Language
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code, language = 'tsx' }) => {
  return (
    <Highlight code={code.trim()} language={language} theme={theme}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={`rounded-md overflow-auto p-4 ${className}`}
          style={style}
        >
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  )
}

export default CodeBlock
