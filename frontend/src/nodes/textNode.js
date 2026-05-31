export const TextNode = ({id, data})=> {
  return(
    <BaseNode
      id={id}
      data= {data}
      label= "Text"
      outputs= {[{id: 'output'}]}
    />
  );
};
