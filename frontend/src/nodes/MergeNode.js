export const MergeNode = ({id, data}) =>{
  return (
    <BaseNode
      id={id}
      data={data}
      label="Merge"
      inputs={[{id: 'input1'}, {id: 'input2'}]}
      outputs={[{id: 'output'}]}
    />
  )
}