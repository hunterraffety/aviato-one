'use client'

import React from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'

interface MarkdownDisplayProps {
  markdown: string
}

/**
 * MarkdownDisplay Component
 * Displays markdown content in a nicely styled format.
 */
const MarkdownDisplay: React.FC<MarkdownDisplayProps> = ({ markdown }) => {
  return (
    <div style={{ maxWidth: '100%', display: 'flex' }}>
      <div className="prose prose-lg max-w-none mx-auto bg-white border-t-corporate-blue m-6 p-8 rounded-lg shadow-lg">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw]}
          components={{
            h1: ({ children }) => (
              <h1 className="text-4xl font-bold text-blue-600">{children}</h1>
            ),
            h2: ({ children }) => (
              <h2 className="text-3xl font-semibold text-blue-500 mt-8">
                {children}
              </h2>
            ),
            h3: ({ children }) => (
              <h3 className="text-2xl font-semibold text-blue-400 mt-6">
                {children}
              </h3>
            ),
            p: ({ children }) => (
              <p className="text-gray-700 leading-relaxed">{children}</p>
            ),
            li: ({ children }) => (
              <ul>
                <li className="text-gray-700 ml-6 list-disc">{children}</li>
              </ul>
            ),
            code: ({
              inline,
              children,
              ...props
            }: React.HTMLAttributes<HTMLElement> & { inline?: boolean }) =>
              inline ? (
                <code className="bg-gray-100 text-red-500 px-1 rounded">
                  {children}
                </code>
              ) : (
                <pre
                  className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto mt-4"
                  {...(props as React.HTMLAttributes<HTMLPreElement>)}
                >
                  <code>{children}</code>
                </pre>
              ),
            a: ({ children, href }) => (
              <a href={href} className="text-blue-600 hover:underline">
                {children}
              </a>
            ),
          }}
        >
          {markdown}
        </ReactMarkdown>
      </div>
    </div>
  )
}

export default MarkdownDisplay
