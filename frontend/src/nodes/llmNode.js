export const LLMNode = ({id, data})=> {
  return(
    <BaseNode
      id={id}
      data= {data}
      label= "LLM"
      inputs= {[
        {id: 'system', style: {top: '33%'}},
        {id: 'prompt', style: {top: '66%'}}
      ]}
      outputs= {[{id: 'response'}]}
    />
  );
};