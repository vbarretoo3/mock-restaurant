import React from 'react'

function Item(item) {
    function handleSubmit() {
        console.log('submited')
    }

  return (
    <div>
        <form type='Submit' onSubmit={handleSubmit}>
            <label>
                Name:
            </label>
            <input type='text' value={item.name.stringValue} />
            <label>
                Price:
            </label>
            <input type='text' value={item.price.integerValue} />
            <label>
                Description:
            </label>
            <input type='text' value={item.description.stringValue} />
            {item.options? <>
            <label>
                Options:
            </label>
            <input type='text' value={item.options.stringValue} /></> : null}
            <label>
                Type:
            </label>
            <input type='text' value={item.type.stringValue} />
            <button type="submit"> Submit Changes</button>
        </form>
    </div>
  )
}

export default Item