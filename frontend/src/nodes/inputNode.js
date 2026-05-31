export const InputNode = ({id, data})=> {
  return( 
    <BaseNode
      id={id}
      data= {data}
      label= "Input"
      outputs= {[{id: 'value'}]}
      fields={[{key:'inputName', label: 'Name', type: 'text', default: id.replace('customInput-', 'input_')},
        {key: 'inputType', label: 'Type', type: 'select', options: ['Text', 'File'] }
      ]}
    />
  );
};