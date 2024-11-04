import React from 'react'

interface Prop {
  name: string
  type: string
  description: string
  required: boolean
}

interface PropsTableProps {
  props: readonly Prop[]
}

const PropsTable: React.FC<PropsTableProps> = ({ props }) => {
  return (
    <table className="min-w-full bg-white border border-gray-200">
      <thead>
        <tr>
          <th className="py-2 px-4 border-b text-left">Name</th>
          <th className="py-2 px-4 border-b text-left">Type</th>
          <th className="py-2 px-4 border-b text-left">Description</th>
          <th className="py-2 px-4 border-b text-left">Required</th>
        </tr>
      </thead>
      <tbody>
        {props.map(prop => (
          <tr key={prop.name}>
            <td className="py-2 px-4 border-b">{prop.name}</td>
            <td className="py-2 px-4 border-b">
              <code className="bg-gray-100 px-1 py-0.5 rounded">
                {prop.type}
              </code>
            </td>
            <td className="py-2 px-4 border-b">{prop.description}</td>
            <td className="py-2 px-4 border-b">
              {prop.required ? 'Yes' : 'No'}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default PropsTable
