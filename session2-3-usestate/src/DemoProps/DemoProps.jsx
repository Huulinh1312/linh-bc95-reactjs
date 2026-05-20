// rafc
import React from 'react'

// props: 1 object chứa dữ liệu được truyền từ component cha xuống component con

// Giá trị của thuộc tính có thể: string, number, bigInt, boolean, array, object, function
export const DemoProps = (props) => {
    console.log({ props })
    // destrunturing props object
    const { text, number, color, demoFnc } = props
    console.log({ color })

   return (
        <div>
            {text}
            {demoFnc && (
                <button className="bg-red-500 text-white p-3" onClick={demoFnc}>
                    Click me
                </button>
            )}
        </div>
    )

}


export default DemoProps
