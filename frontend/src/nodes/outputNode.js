
export const OutputNode = ({id, data})=> {
  return(
    <BaseNode
      id={id}
      data= {data}
      label= "Output"
      inputs= {[{id: 'value'}]}
      fields={[
        {key:'outputName', label: 'Name', type: 'text', default: id.replace('customOutput-', 'output_')},
        {key: 'outputType', label: 'Type', type: 'select', options: ['Text', 'Image'] }
      ]}
    />
  );
};