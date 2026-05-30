import { useState } from 'react';
import { Handle, Position } from 'reactflow';

export const BaseNode = ({ 
  id, 
  data,
  label,
  width = 200,        
  height = 80,        
  inputs = [],        
  outputs = [],       
  fields = []         
}) => {

  // One state object for all fields
  const [fieldValues, setFieldValues] = useState(
    Object.fromEntries(
      fields.map(f => [f.key, f.default || ''])
    )
  );

  // when any field changes
  const handleFieldChange = (key, value) => {
    setFieldValues(prev => ({
      ...prev,       // keep all existing values
      [key]: value   // update just this one key
    }));
  };

  return (
    <div style={{ width, height, border: '1px solid black' }}>

      {/* Titlebar */}
      <div>
        <span>{ label}</span>
      </div>

      {/* Form fields */}
      <div>
        {fields.map(field => (
          <div key={ field.key}>
            <label>{field.label}</label>

            {field.type === 'select' ? (
              <select
                value={ fieldsValue[field.key] }
                onChange={ (e) => handleFieldChange(field.key, e.target.value) }
              >
                {field.options.map(opt => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            ) : (
              <input
                type="text"
                value={ fieldValue[field.key] }
                onChange={ (e) => handleFieldChange(field.key, e.target.value) }
              />
            )}

          </div>
        ))}
      </div>

      {/* Left side handles */}
      {inputs.map(input => (
        <Handle
          key={ `${id}-${input.id}` }
          type="target"
          position={ Position.Left }
          id={`${id}-${input.id}`}
          style={input.style || {}}
        />
      ))}

      {/* Right side handles */}
      {outputs.map(output => (
        <Handle
          key={ `${id}-${output.id}` }
          type="source"
          position={ Position.Right }
          id={`${id}-${output.id}`}
          style={output.style || {}}
        />
      ))}

    </div>
  );
};
